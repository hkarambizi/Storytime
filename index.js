const prompt = require('prompt-sync')({sigint: true}); // npm package allows users to provide input. The argument allows users to exit manually
const plotGenerator = require('./plots');

const randomlyPickSection = (array) => {
    const randomIdx = Math.floor(Math.random() * array.length);
    return array[randomIdx];
}

// Generate a random story with the plots using the plotGenerator
const storyFactory = (generator, player1, player2) => {
    const segments = [];
    const plots = generator(player1, player2);
    Object.keys(plots).forEach(stage=> {
        segments.push(randomlyPickSection(plots[stage]));
    })
    return segments.join(' ');
}

// Get user input for two names: 1 and 2
const characterOne = prompt('Welcome to Storytime! Please provide the first character\'s name... ');
console.log(`${characterOne}! Excellent choice.`)
const characterTwo = prompt('In order to start the story, please enter the second character\'s name...');

// log out the story
console.log(storyFactory(plotGenerator, characterOne, characterTwo));
