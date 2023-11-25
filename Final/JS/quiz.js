var myQuestions = [
    {
        question: "When did Kazakhstan gain its independence?",
        answers: {
            a: 'December 16, 1991',
            b: 'October 25, 1990',
            c: 'December 1, 1991'
        },
        correctAnswer: 'a'
    },
    {
        question: "When Nursultan Nazarbayev was elected as a president of Kazakh SSR?",
        answers: {
            a: 'October 25, 1990',
            b: 'December 1, 1991',
            c: 'April 24, 1990'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which countries were the first to recognize the independence of Kazakhstan?",
        answers: {
            a: 'Kyrgystan, Uzbekistan, USA and China',
            b: 'Europe, Japan and Russia',
            c: 'Türkiye, Russia, USA and China'
        },
        correctAnswer: 'c'
    },
    {
        question: "When was the first national president elections?",
        answers: {
            a: 'December 16, 1991',
            b: 'December 1, 1991',
            c: 'October 25, 1990'
        },
        correctAnswer: 'b'
    },
    {
        question: "How many persent this site will get?",
        answers: {
            a: '60%',
            b: '70 - 80%',
            c: '90%'
        },
        correctAnswer: 'c'
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {

            answers = [];

            for (letter in questions[i].answers) {

                answers.push(
                    '<li class="list-group-item"><div class="form-check"><label> <input class="form-check-input" type="radio" name="question' + i + '" value="' + letter + '"> '
                    + letter + ': '
                    + questions[i].answers[letter]
                    + ' </label></div></li>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {

            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;

                answerContainers[i].querySelectorAll('li')[0].style.color = 'lightgreen';
                answerContainers[i].querySelectorAll('li')[1].style.color = 'lightgreen';
                answerContainers[i].querySelectorAll('li')[2].style.color = 'lightgreen';
            }
            else {
                answerContainers[i].querySelectorAll('li')[0].style.color = 'red';
                answerContainers[i].querySelectorAll('li')[1].style.color = 'red';
                answerContainers[i].querySelectorAll('li')[2].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);


    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }

}