import { calculateUserScores, findBestMatch } from './logic.js';
import questions from './questions.js';

document.addEventListener('DOMContentLoaded', function() {
    
    const buttonUp = document.getElementById('button-up');
    const buttonDown = document.getElementById('button-down');
    const buttonA = document.getElementById('button-a');

    if (buttonUp && buttonDown && buttonA) {
        buttonUp.addEventListener('click', () => navigateOptions('up'));
        buttonDown.addEventListener('click', () => navigateOptions('down'));
        buttonA.addEventListener('click', handleButtonA);
    } else {
        console.error('SVG buttons not found');
    }

    const dialogueText = [
        "Hello there! Welcome to the world of POKÉMON!",
        "My name is Oak. People call me the POKÉMON PROF!",
        "I'll ask you questions to find your perfect Pokémon match.",
        "Your very own Pokémon story is about to unfold.",
        "Let's go!"
    ];

    const quizForm = document.getElementById('quiz-form');
    const questionsContainer = document.getElementById('questions-container');
    const dialogueContainer = document.getElementById('dialogue-container');
    const dialogueP = document.getElementById('dialogue-text');
    let dialogueIndex = 0;
    let textPosition = 0; 
    let currentDialoguePart = "";
    let responses = []; 

    dialogueContainer.addEventListener('click', advanceDialogue);
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && event.target === dialogueContainer) {
            advanceDialogue();
        }
    });

    function typeWriter() {
        if (textPosition < currentDialoguePart.length) {
            dialogueP.textContent += currentDialoguePart.charAt(textPosition);
            textPosition++;
            setTimeout(typeWriter, 50); 
        }
    }

    function advanceDialogue() {
        if (textPosition < currentDialoguePart.length) {
            dialogueP.textContent = currentDialoguePart;
            textPosition = currentDialoguePart.length;
        } else if (dialogueIndex < dialogueText.length) {
            currentDialoguePart = dialogueText[dialogueIndex++];
            textPosition = 0;
            dialogueP.textContent = '';
            typeWriter(); 
        } else {
            dialogueContainer.style.display = 'none';
            quizForm.style.display = 'block';
            loadQuestion(0);
        }
    }

    function loadQuestion(index) {
        const totalQuestions = 36;
        const questionCounter = document.getElementById('question-counter');
        questionCounter.textContent = `Q: ${index + 1}/${totalQuestions}`;
        
        questionsContainer.innerHTML = ''; 
    
        if (index < questions.length) {
            const question = questions[index];
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `
                <label>${question.text}</label>
                <div class="custom-options" tabindex="0"> <!-- Make options focusable -->
                    <span class="custom-option" data-value="1" tabindex="-1">Never</span>
                    <span class="custom-option" data-value="2" tabindex="-1">Rarely</span>
                    <span class="custom-option" data-value="3" tabindex="-1">Sometimes</span>
                    <span class="custom-option" data-value="4" tabindex="-1">Often</span>
                    <span class="custom-option" data-value="5" tabindex="-1">Always</span>
                </div>
            `;
            questionsContainer.appendChild(questionDiv);
            setupCustomSelect(questionDiv.querySelector('.custom-options'), index);
        } else {
            calculateAndDisplayResults(responses);
        }
    }
    
    function setupCustomSelect(options, questionIndex) {
        let selectedOptionIndex = -1; 
        const allOptions = options.querySelectorAll('.custom-option');
      
        function updateSelectedOption() {
            if (selectedOptionIndex >= 0) {
                allOptions.forEach(opt => opt.classList.remove('selected'));
                allOptions[selectedOptionIndex].classList.add('selected');
                allOptions[selectedOptionIndex].focus(); 
            }
        }
    
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                if (allOptions.length > 0) {
                    const move = (e.key === 'ArrowDown') ? 1 : -1;
                    selectedOptionIndex = (selectedOptionIndex + move + allOptions.length) % allOptions.length;
                    updateSelectedOption();
                }
            }
        });
    
        allOptions.forEach((option, idx) => {
            option.addEventListener('click', () => {
                selectedOptionIndex = idx;
                updateSelectedOption(allOptions, selectedOptionIndex);
                proceedAfterSelection(idx, questionIndex);
            });
        });

        function proceedAfterSelection(selectedIndex, questionIndex) {
            responses[questionIndex] = parseInt(allOptions[selectedIndex].getAttribute('data-value'));
            console.log('Current responses:', responses);
        
            if (questionIndex === questions.length - 1) {
                calculateAndDisplayResults(responses);
            } else {
                loadQuestion(questionIndex + 1);
            }
        }
    }

    function navigateOptions(direction) {
        const allOptions = document.querySelectorAll('.custom-option');
        let currentIndex = Array.from(allOptions).findIndex(opt => opt.classList.contains('selected'));
    
        if (direction === 'up') {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : allOptions.length - 1;
        } else if (direction === 'down') {
            currentIndex = currentIndex < allOptions.length - 1 ? currentIndex + 1 : 0;
        }
    
        allOptions.forEach(opt => opt.classList.remove('selected'));
        allOptions[currentIndex].classList.add('selected'); 
        allOptions[currentIndex].focus();
    }
    
    function selectOption() {
        const selectedOption = document.querySelector('.custom-option.selected');
        if (selectedOption) {
            selectedOption.click(); 
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const buttonUp = document.getElementById('button-up');
        const buttonDown = document.getElementById('button-down');
        const buttonA = document.getElementById('button-a');
    
        buttonUp.addEventListener('click', () => navigateOptions('up'));
        buttonDown.addEventListener('click', () => navigateOptions('down'));
        buttonA.addEventListener('click', selectOption);
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            const selectedOption = document.querySelector('.custom-option.selected');
            if (selectedOption) {
                selectedOption.click();
            }
        }
    });

    function handleButtonA() {
        if (dialogueContainer.style.display !== 'none') {
            advanceDialogue();
        } else {
            const selectedOption = document.querySelector('.custom-option.selected');
            if (selectedOption) {
                selectedOption.click();
            }
        }
    }

    function calculateAndDisplayResults(responses) {
        const userScores = calculateUserScores(responses);
        const bestMatch = findBestMatch(userScores);
    
        for (const element of document.getElementsByClassName('fade-out')) {
            element.style.display = 'none';
        }

        const messageElement = document.getElementById('final-message');
        messageElement.innerHTML = "Your ideal Pokémon partner is...";
    
        showPokemonResult(bestMatch);
    }
    
    function showPokemonResult(pokemon) {
        const pokemonName = document.getElementById('pokemon-name');
        const pokemonImage = document.getElementById('pokemon-image');
        const pokemonResultDiv = document.getElementById('pokemon-result');
    
        pokemonName.textContent = pokemon.name;
        pokemonImage.src = pokemon.img;
        pokemonImage.alt = pokemon.name;
    
        setTimeout(() => {
            pokemonResultDiv.style.display = 'block';
            pokemonResultDiv.classList.add('fade-in');
        }, 1000); 
    }
    
    advanceDialogue();
});
