
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "Who wrote the Ramayana?", answer: "valmiki" },
    { question: "What is 5 multiplied by 6?", answer: "30" },
    { question: "What gas do plants release during photosynthesis?", answer: "oxygen" }
];

function runQuiz() {

    let score = 0; 

    for (let i = 0; i < quizQuestions.length; i++) {

        let userAnswer = prompt(quizQuestions[i].question);

        
        if (userAnswer === null) {
            alert("You exited the quiz early!");
            return;
        }

        
        userAnswer = userAnswer.toLowerCase().trim();

       
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! ");
        } else {
            alert(
                `Incorrect! \nCorrect answer: ${quizQuestions[i].answer}`
            );
        }
    }

    
    alert(`Quiz Completed! \nYour Final Score: ${score}/${quizQuestions.length}`);
}


runQuiz();
