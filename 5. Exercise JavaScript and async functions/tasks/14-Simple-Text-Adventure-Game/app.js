async function startAdventure() {
    let command = "start";
    while (true) {
        switch (command) {
            case "start":
                console.log("You find yourself in a dark forest. You can go 'left' or 'right");
                let question = "What do you do? (left/right): "
                let answers = ["left", "right"];
                let userInput = await askQuestion(question, answers);
                if (userInput === 'right') {
                    command = 'right';
                } else {
                    command = 'left';

                }
                break;
            case "right":
                console.log("You encounter a wild animal! You can 'fight' or 'run'.");
                question = "What do you do? (fight/run): ";
                answers = ["fight", "run"];
                userInput = await askQuestion(question, answers);
                if (userInput === "fight") {
                    console.log("You bravely fight the animal and win!");
                }
                else {
                    console.log("You leave the chest and go back to the start.");
                }
                break;
            case "right":
                console.log("You find a treasure chest! You can 'open' it or 'leave' it.");
                question = "What do you do? (open/leave):";
                answers = ["open", "leave"];
                userInput = await askQuestion(question, answers);
                if (userInput === "open") {
                    console.log("You open the chest and find a treasure! You win!");
                }
                else {
                    console.log("You leave the chest and go back to the start.");
                }
            break;
            case "end":
                break;
            default:
                break;
        }
    }

}

function askQuestion(question, answers) {
    return new Promise(function (resolve, reject) {
        let message = question + '\n';
        let abc = { 0: 'A', 1: 'B', 2: 'C' }
        answers.forEach((answer, index) => message += `${abc[index]}. ${answer}\n`)
        const userInput = prompt(message);
        resolve(userInput);
    })
}