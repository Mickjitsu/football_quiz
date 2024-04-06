document.addEventListener('DOMContentLoaded', function(){
    gameOpener();
    attachEventListeners();
});

var mainScreen = document.querySelector('.main-screen')
/*This function opens a welcome page for 3 seconds before diverting to the start page*/
function gameOpener(){
    setTimeout(function(){
        var welcomeDiv = document.querySelector('.welcome');
        if (welcomeDiv) welcomeDiv.classList.add('hidden');


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
    
    },3000);
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

    
    if(startDiv){
        startDiv.addEventListener('click', startGame)
    };
    if(difficultyDiv){
        difficultyDiv.addEventListener('click', diffChoice)
    }
    if(leagueDiv){
        leagueDiv.addEventListener('click', leagueChoice)
    };
    if(rulesDiv){
        rulesDiv.addEventListener('click', rulesPage)
    };

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
/*the functions below have placeholder text for the time being*/
function startGame(){
    mainScreen.innerHTML = `<div class="start-menu leagues" id="premier-league">
    <p>Premier League</p>
    </div>
    <div class="start-menu leagues" id="scottish-league">
    <p>Scottish League</p>
    </div>
    <div class="start-menu leagues" id="la-liga">
    <p>La Liga</p>
    </div>`
}

function diffChoice(){
    mainScreen.innerHTML = `<div class="start-menu leagues" id="premier-league">
    <p>Premier League</p>
    </div>
    <div class="start-menu leagues" id="scottish-league">
    <p>Scottish League</p>
    </div>
    <div class="start-menu leagues" id="la-liga">
    <p>La Liga</p>
    </div>`
}
function rulesPage(){
    mainScreen.innerHTML = `<div class="start-menu leagues" id="premier-league">
    <p>Premier League</p>
    </div>
    <div class="start-menu leagues" id="scottish-league">
    <p>Scottish League</p>
    </div>
    <div class="start-menu leagues" id="la-liga">
    <p>La Liga</p>
    </div>`
}


/*this function does not have placeholder text. This will determine the league choice by the user*/
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