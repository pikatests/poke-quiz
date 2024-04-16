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
            return; // Skip this iteration
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

function findBestMatch(userScores) {
    let topMatches = [];
    let highestScore = -Infinity;

    // First, find the highest score to establish a benchmark
    pokemon.forEach(p => {
        let compatibilityScore = 0;
        p.traits.forEach(trait => {
            let score = userScores[trait.name] || 0;
            if (!trait.positive) score = 6 - score;  // Adjust for traits scored in reverse
            compatibilityScore += score * trait.weight;
        });

        // Update highest score and reset top matches if new highest score found
        if (compatibilityScore > highestScore) {
            highestScore = compatibilityScore;
            topMatches = [p];
        } else if (compatibilityScore >= highestScore - 10) {  // Consider matches within a range of the top score
            topMatches.push(p);
        }
    });

    // Select randomly from the top matches
    if (topMatches.length > 1) {
        return topMatches[Math.floor(Math.random() * topMatches.length)];
    } else {
        return topMatches[0]; // Return the only top match or the highest if only one was found
    }
}

export { calculateUserScores, findBestMatch };