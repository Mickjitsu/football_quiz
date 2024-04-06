document.addEventListener('DOMContentLoaded', function(){
    gameOpener();
    /*attachEventListeners();*/
});

/*This function opens a welcome page for 3 seconds before diverting to the start page*/
function gameOpener(){
    setTimeout(function(){
        var welcomeDiv = document.querySelector('.welcome');
        if (welcomeDiv) welcomeDiv.classList.add('hidden');

        var mainScreen = document.querySelector('.main-screen');
        if(mainScreen){mainScreen.classList.remove('hidden');

        mainScreen.innerHTML = `<div class="start-menu" id="start-match">
        <p>Start Match</p>
    </div>
    <div class="start-menu" id="difficulty">
        <p>Choose your league</p>
    </div>
    <div class="start-menu" id="difficulty">
        <p>Choose your difficultu</p>
    </div>
    <div class="start-menu" id="rules">
        <p>Tutorial</p>
    </div>`}
        
    },3000);
}