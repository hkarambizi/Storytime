const plotGenerator = (player1, player2) => {
    return {
        settings:[
            "One foggy night in Northern Massachusetts,",
            "In the summer of June 2019,",
            "In Ancient Greece,",
            "It was the year 2039, New Years Eve,",
            "Chicago 1920, on the hottest day in August,",
            "In the dangerous streets of Southern Rio de Janeiro",
            "On the International Space Station, it was just like any other day,"
            ],
            conflicts:[
            `${player1} was late and running to go get food for their family before time ran out.`,
             `${player1} and ${player2} were not in the best of moods.`,
             `${player1} could not stop thinking about the last words ${player1} said to them.`,
             `${player1} and ${player2} were in a very sticky situation.`,
             `y woke up bound by their hands and feet, and ${player1} was unconscious.`,
             `${player1} looked passionately at ${player2} as they stood on the altar on their wedding day.`
             ],
            actions:[
                `${player1} sees a weapon high above and tries to reach for it.`,
              `${player1} and ${player2} look at each other and make a break for it.`,
              `A group of bandits, jump out of the darkness. ${player1} gets battle-ready.`,
              `${player1} sends a quick message to ${player2} to warn them of what was happening.`
              ],
            results:[
                `${player1} jumps down from the second level, seemingly out of danger.`,
            `${player1} and ${player2}, open the door to see the police have surrounded them.`,
            `${player2} lifts ${player1} over their shoulder to carry them to safety.`,
            `the enemy stops ${player1}, to tell him he is only here to help.`,
            `${player1} has another painful migraine, and ${player1} can no longer see.`
            ],
            cliffhangers: [
                `${player1} suddenly wakes up. ${player2} is asleep ne${player1}t to ${player1}, but wakes up...'same dream?'...`,
            `${player2} turns to ${player1}, pulls out a gun... 'give it up ${player1}, it is time to go home'...`,
            `${player1} and ${player2} near the end of the bridge, hold hands and take a leap...`,
            `${player1} gets home, and to ${player1}'s surprise, they are not alone...`,
            `${player1} find a note.. 'if you ever want to see ${player2} again, you will follow these instructions...'`
            ]
    }
}
module.exports = plotGenerator;
