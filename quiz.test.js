import { calculateUserScores, findBestMatch } from './logic.js';
import pokemon from './pokemon.js';

// Define some test cases
const testCases = [
    {
        description: "High Honesty-Humility and High Conscientiousness",
        scores: {
            "Honesty-Humility": 4.7,
            "Emotionality": 2.0,
            "Extraversion": 2.5,
            "Agreeableness": 3.5,
            "Conscientiousness": 4.5,
            "Openness to Experience": 3.0
        },
        expectedPokemon: "Pokémon X" 
    },
    {
        description: "Low Emotionality and High Openness",
        scores: {
            "Honesty-Humility": 3.0,
            "Emotionality": 1.5,
            "Extraversion": 3.0,
            "Agreeableness": 2.5,
            "Conscientiousness": 2.0,
            "Openness to Experience": 4.8
        },
        expectedPokemon: "Pokémon Y"
    },
    {
        description: "Balanced Traits with a Slight Tilt Towards Extraversion",
        scores: {
            "Honesty-Humility": 3.0,
            "Emotionality": 3.0,
            "Extraversion": 4.0,
            "Agreeableness": 3.0,
            "Conscientiousness": 3.0,
            "Openness to Experience": 3.0
        },
        expectedPokemon: "Pokémon Z"
    },
    {
        description: "High Agreeableness and Low Honesty-Humility",
        scores: {
            "Honesty-Humility": 1.5,
            "Emotionality": 2.5,
            "Extraversion": 3.2,
            "Agreeableness": 4.6,
            "Conscientiousness": 3.1,
            "Openness to Experience": 2.9
        },
        expectedPokemon: "Pokémon W"
    },
    {
        description: "Very Low Scores Across All Traits",
        scores: {
            "Honesty-Humility": 1.0,
            "Emotionality": 1.0,
            "Extraversion": 1.0,
            "Agreeableness": 1.0,
            "Conscientiousness": 1.0,
            "Openness to Experience": 1.0
        },
        expectedPokemon: "Pokémon V"
    }
];

function runTests() {
    testCases.forEach(testCase => {
        console.log(`Testing: ${testCase.description}`);
        const scores = testCase.scores;
        const bestMatch = findBestMatch(scores);
        console.log(`Best match for ${testCase.description}: ${bestMatch.name}`);
    });
}

runTests();