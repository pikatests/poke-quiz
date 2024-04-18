import questions from './questions.js';
import pokemon from './pokemon.js';

function calculateUserScores(responses) {
    let scores = {
        "Honesty-Humility": 0,
        "Emotionality": 0,
        "Extraversion": 0,
        "Agreeableness": 0,
        "Conscientiousness": 0,
        "Openness to Experience": 0
    };
    const count = {
        "Honesty-Humility": 0,
        "Emotionality": 0,
        "Extraversion": 0,
        "Agreeableness": 0,
        "Conscientiousness": 0,
        "Openness to Experience": 0
    };

    responses.forEach((response, index) => {
        console.log(`Processing response ${index}:`, response, questions[index]);
        if (!questions[index]) {
            console.error("No question data available at index:", index);
            return;
        }
        const questionTrait = questions[index].trait;
        let increment = response;
        if (questions[index].reverse) {
            increment = 6 - increment;
        }
        scores[questionTrait] += increment;
        count[questionTrait] += 1;
    });

    // Normalize scores by the number of questions per trait
    Object.keys(scores).forEach(trait => {
        if (count[trait] > 0) {
            scores[trait] = scores[trait] / count[trait];
        }
        console.log(`Normalized score for ${trait}: ${scores[trait]}`);
    });

    return scores;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function findBestMatch(userScores) {
    let topMatches = [];
    let highestScore = -Infinity;
    const scoreThreshold = 0.3;  

    pokemon.forEach(p => {
        let compatibilityScore = 0;
        p.traits.forEach(trait => {
            let score = userScores[trait.name] || 0;
            if (!trait.positive) score = 6 - score;
            compatibilityScore += score * trait.weight;
        });

        if (compatibilityScore > highestScore) {
            highestScore = compatibilityScore;
            topMatches = [p];
        } else if (compatibilityScore >= highestScore - scoreThreshold) {
            topMatches.push(p);
        }
    });

    // Ensure diversity in selection if possible
    if (topMatches.length > 10) {
        // If more than 10 matches, narrow down randomly to 10
        shuffleArray(topMatches); 
        topMatches = topMatches.slice(0, 10);
    }

    return topMatches[Math.floor(Math.random() * topMatches.length)];
}

export { calculateUserScores, findBestMatch };
