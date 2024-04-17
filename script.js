import { calculateUserScores, findBestMatch } from './logic.js';
import questions from './questions.js';

document.addEventListener('DOMContentLoaded', function() {
    const dialogueText = [
        "Hello there! Welcome to the world of POKÉMON!",
        "My name is Oak. People call me the POKÉMON PROF!",
        "I'll ask you questions to find your perfect Pokémon match.",
        "Your very own Pokémon story is about to unfold.",
        "Let's go!"
    ];

    const quizForm = document.getElementById('quiz-form');
    const questionsContainer = document.getElementById('questions-container');
    const resultsContainer = document.getElementById('result');
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
        questionCounter.textContent = `Question ${index + 1}/${totalQuestions}`;
        
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
        let selectedOptionIndex = 0; 
        const allOptions = options.querySelectorAll('.custom-option');
  
        function updateSelectedOption() {
            allOptions.forEach((opt, idx) => {
                opt.classList.remove('selected');
                opt.setAttribute('tabindex', '-1'); 
            });
            allOptions[selectedOptionIndex].classList.add('selected');
            allOptions[selectedOptionIndex].setAttribute('tabindex', '0'); 
            allOptions[selectedOptionIndex].focus(); 
        }
    
        updateSelectedOption(); 
    
        options.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                selectedOptionIndex = (selectedOptionIndex + 1) % allOptions.length;
                updateSelectedOption();
                e.preventDefault(); 
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                selectedOptionIndex = (selectedOptionIndex - 1 + allOptions.length) % allOptions.length;
                updateSelectedOption();
                e.preventDefault();
            } else if (e.key === 'Enter' || e.key === ' ') { 
                allOptions[selectedOptionIndex].click(); 
            }
        });
    
        allOptions.forEach(option => {
            option.addEventListener('click', () => {
                allOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                responses.push(parseInt(option.getAttribute('data-value'))); 
                console.log('Current responses:', responses); 
    
                if (questionIndex === questions.length - 1) {
                    // Last question answered
                    setTimeout(() => calculateAndDisplayResults(responses), 2000); 
                } else {
                    loadQuestion(questionIndex + 1);
                }
            });
        });
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
    
        // Fade in the Pokémon result
        setTimeout(() => {
            pokemonResultDiv.style.display = 'block';
            pokemonResultDiv.classList.add('fade-in');
        }, 1000); 
    }
    
    advanceDialogue();
});