document.addEventListener('DOMContentLoaded', function() {
    gameOpener();
});

/*Quiz questions*/
const premEasyQs = [
    {
        question: "Who won the Premier League in the 2019/2020 season?",
        answers: [
            {text: "Manchester United", correct: false},
            {text: "Liverpool FC", correct: true},
            {text: "Chelsea FC", correct: false},
            {text: "Manchester City", correct: false}
        ]
    },
    {
        question: "Which player holds the record for the most Premier League goals?",
        answers: [
            {text: "Thierry Henry", correct: false},
            {text: "Wayne Rooney", correct: false},
            {text: "Alan Shearer", correct: true},
            {text: "Sergio Agüero", correct: false}
        ]
    },
    {
        question: "Which team is known as the 'Spurs'?",
        answers: [
            {text: "Arsenal FC", correct: false},
            {text: "Chelsea FC", correct: false},
            {text: "West Ham United", correct: false},
            {text: "Tottenham Hotspur", correct: true}
        ]
    },
    {
        question: "How many teams compete in the Premier League?",
        answers: [
            {text: "18", correct: false},
            {text: "20", correct: true},
            {text: "22", correct: false},
            {text: "21", correct: false}
        ]
    },
    {
        question: "Who is the only player to have won the Premier League with three different clubs?",
        answers: [
            {text: "Nicolas Anelka", correct: false},
            {text: "Ashley Cole", correct: true},
            {text: "Carlos Tevez", correct: false},
            {text: "Mark Schwarzer", correct: false}
        ]
    }
]

let currentQuestionIndex = 0;
let currentScore = 0;
let difficulty; // Define difficulty
let league; // Define league

var mainScreen = document.querySelector('.main-screen');

function gameOpener() {
    setTimeout(function() {
        var welcomeDiv = document.querySelector('.welcome');
        if (welcomeDiv) welcomeDiv.classList.add('hidden');

        if (mainScreen) {
            mainScreen.classList.remove('hidden');
            mainScreen.innerHTML = `
                <div class="start-menu" id="start-match"><p>Start Match</p></div>
                <div class="start-menu" id="league"><p>Choose your league</p></div>
                <div class="start-menu" id="difficulty"><p>Choose your difficulty</p></div>
                <div class="start-menu" id="rules"><p>Tutorial</p></div>
            `;
            attachEventListeners();
        }
    }, 3000);
}

/*this allows users to be able to return to the main screen without a 3 second delay*/
function gameOpener2(){
    if(mainScreen){mainScreen.classList.remove('hidden');

        mainScreen.innerHTML = `<div class="start-menu" id="start-match">
        <p>Start Match</p>
    </div>
    <div class="start-menu" id="league">
        <p>Choose your league</p>
    </div>
    <div class="start-menu" id="difficulty">
        <p>Choose your difficulty</p>
    </div>
    <div class="start-menu" id="rules">
        <p>Tutorial</p>
    </div>`

    attachEventListeners();
}
}

function attachEventListeners(){
    const startDiv = document.querySelector('#start-match');
    const difficultyDiv = document.querySelector('#difficulty');
    const leagueDiv = document.querySelector('#league');
    const rulesDiv = document.querySelector('#rules');
    const close = document.querySelector('.close')
    const tutorial = document.querySelector('.tutorial')

    
    if(startDiv){
        startDiv.addEventListener('click', startGame)
    };
    if(difficultyDiv){
        difficultyDiv.addEventListener('click', diffChoice)
    }
    if(leagueDiv){
        leagueDiv.addEventListener('click', leagueChoice)
    };
    if (rulesDiv){
        rulesDiv.addEventListener('click', function(){
            tutorial.classList.remove('hidden');
        })
    }
    if(close){
        close.addEventListener('click', function(){
            tutorial.classList.add('hidden');
        })
    }

};

function leagueChoice(){
    mainScreen.innerHTML = `<div class="start-menu leagues" id="premier-league">
    <p>Premier League</p>
    </div>
    <div class="start-menu leagues" id="scottish-league">
    <p>Scottish League</p>
    </div>
    <div class="start-menu leagues" id="la-liga">
    <p>La Liga</p>
    </div>`
    attachLeagueListener()
}



/*these functions do not have placeholder text. This will determine the league choice by the user*/
function attachLeagueListener(){
    document.querySelector('#premier-league').addEventListener('click', function(){
        league = 'premier league';
        console.log('The league is set to the Premier League')
        gameOpener2()
    });
    document.querySelector('#scottish-league').addEventListener('click', function(){
        league = 'scottish league';
        console.log('The league is set to the scottish premiership')
        gameOpener2()
    });
    document.querySelector('#la-liga').addEventListener('click', function(){
        league = 'La liga';
        console.log('The league is set to the Spanish La Liga')
        gameOpener2()
    });
};



/*this determines and logs the users difficulty choice*/

function diffChoice(){
    mainScreen.innerHTML = `<div class="start-menu difficulty" id="easy">
    <p>The League Cup</p>
    </div>
    <div class="start-menu difficulty" id="medium">
    <p>The league</p>
    </div>
    <div class="start-menu difficulty" id="hard">
    <p>The treble</p>
    </div>`
    attachDiffListener();
};

function attachDiffListener(){
    document.querySelector('#easy').addEventListener('click', function(){
        difficulty = 'easy';
        console.log('Difficulty is set to easy')
        gameOpener2()
    });
    document.querySelector('#medium').addEventListener('click', function(){
        difficulty = 'medium';
        console.log('Difficulty is set to medium')
        gameOpener2()
    });
    document.querySelector('#hard').addEventListener('click', function(){
        difficulty = 'hard';
        console.log('Difficulty is set to hard')
        gameOpener2()
    })
};



/*Function to start the game*/
function startGame() {
    if (difficulty === 'easy' && league === 'premier league') {
        mainScreen.innerHTML = `
            <div class="game-area"><h2>Premier League EFL Cup</h2></div>
            <div class='quiz'>
                <h3 id='question'>Insert question here</h3>
                <div id='answer-buttons'></div>
                <button id='next-btn' class='btn' style='display: none;'>Next Question</button>
            </div>
        `;
        currentScore = 0;
        currentQuestionIndex = 0; // Reset question index
        showQuestion();
        document.querySelector('#next-btn').addEventListener('click', nextButtonHandle); // Attach event listener after the button is added to the DOM
    } else {
        alert('You need to set your difficulty and choose a league');
    }
}

function showQuestion() {
    const questionElement = document.querySelector('#question');
    const answerButtonsElement = document.querySelector('#answer-buttons');
    const nextBtn = document.querySelector('#next-btn');

    if (currentQuestionIndex < premEasyQs.length) {
        const currentQuestion = premEasyQs[currentQuestionIndex];
        questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        answerButtonsElement.innerHTML = ''; // Clear previous answers

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });

        nextBtn.style.display = 'none'; 
    } else {
        // Handle quiz end
        console.log("Quiz finished. Score:", currentScore);
        mainScreen.innerHTML = `<div class="game-area"><h2>Quiz Complete</h2></div>
        <div class='quiz'>
            <h3 id='question'>Congratulations, you scored ${currentScore} out of 5!</h3>
            <div id='answer-buttons'></div>
            <button id='next-btn' class='btn' style='display: none;'>Next Question</button>
        </div>`
        
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    const answerButtonsElement = document.querySelector('#answer-buttons');
    const nextBtn = document.querySelector('#next-btn');

    if (correct) {
        selectedButton.classList.add('correct');
        currentScore++;
    } else {
        selectedButton.classList.add('incorrect');
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });

    nextBtn.style.display = 'block'; // Show the next button
}

function nextButtonHandle() {
    currentQuestionIndex++;
    showQuestion(); // Call showQuestion to update the quiz for the next question
}