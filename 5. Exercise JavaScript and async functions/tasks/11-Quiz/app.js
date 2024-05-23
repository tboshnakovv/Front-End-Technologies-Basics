async function startQuiz() {
    
    let finalScore = 0;
    for (let index = 0; index < questions.length; index++) {
        const {question, answers, correct} = questions[index];
        const userInput = await askQuestion(question, answers);
        if(userInput == correct)
            {
                finalScore +=1;
                console.log("Correct!");
            }
            else{
                console.log("Not correct!");
            }
    }

    console.log("Final result" + finalScore);
}

function askQuestion(question, answers)
{
    return new Promise(function(resolve, reject){
    let message = question + '\n';
    let abc = {0: 'A', 1: 'B', 2: 'C'}
    answers.forEach((answer, index) =>  message += `${abc[index]}. ${answer}\n`)
    const userInput = prompt(message);
    resolve(parseInt(userInput));
   })
}

const questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5"],
        correct: 1
    },
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris"],
        correct: 2
    },
    {
        question: "What is the square root of 16?",
        answers: ["4", "5", "6"],
        correct: 0
    },
]