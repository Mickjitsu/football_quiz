document.addEventListener('DOMContentLoaded', function() {
    gameOpener();
});

/*Quiz questions*/
/*premier league*/
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



const premMediumQs = [
    {
        question: "Who won the Premier League Golden Boot for the 2017-2018 season?",
        answers: [
            {text: "Harry Kane", correct: false},
            {text: "Sergio Agüero", correct: false},
            {text: "Mohamed Salah", correct: true},
            {text: "Pierre-Emerick Aubameyang", correct: false}
        ]
    },
    {
        question: "Which club holds the record for the fewest points in a Premier League season?",
        answers: [
            {text: "Sunderland", correct: false},
            {text: "Derby County", correct: true},
            {text: "Aston Villar", correct: false},
            {text: "Huddersfield Town", correct: false}
        ]
    },
    {
        question: "Who is the youngest player to appear in the Premier League?",
        answers: [
            {text: "Harvey Elliott", correct: false},
            {text: "James Vaughan", correct: true},
            {text: "Wayne Rooney", correct: false},
            {text: "Ethan Ampadu", correct: false}
        ]
    },
    {
        question: "What was unique about Arsenal's 2003-2004 Premier League season?",
        answers: [
            {text: "They won all their home games.", correct: false},
            {text: "They did not lose a single match.", correct: true},
            {text: "They scored in every match.", correct: false},
            {text: "They won the league without any English players.", correct: false}
        ]
    },
    {
        question: "Which player has the most Premier League red cards?",
        answers: [
            {text: "Patrick Vieira", correct: false},
            {text: "Richard Dunne", correct: false},
            {text: "Duncan Ferguson", correct: true},
            {text: "Roy Keane", correct: false}
        ]
    },
    {
        question: "As of the end of the 2022-2023 season, which club has been relegated from the Premier League the most times?",
        answers: [
            {text: "Norwich City", correct: true},
            {text: "West Bromwich Albion", correct: false},
            {text: "Sunderland", correct: false},
            {text: "Crystal Palace", correct: false}
        ]
    },
    {
        question: "Who was the first player to reach 100 Premier League assists?",
        answers: [
            {text: "David Beckham", correct: false},
            {text: "Ryan Giggs", correct: true},
            {text: "Cesc Fàbregas", correct: false},
            {text: "Kevin De Bruyne", correct: false}
        ]
    },
    {
        question: "Who was the first manager to win the Premier League with two different clubs?",
        answers: [
            {text: "José Mourinho", correct: false},
            {text: "Pep Guardiola", correct: false},
            {text: "Carlo Ancelotti", correct: true},
            {text: "Alex Ferguson", correct: false}
        ]
    },
    {
        question: "Which club achieved the longest unbeaten run in Premier League history?",
        answers: [
            {text: "Chelsea", correct: false},
            {text: "Manchester United", correct: false},
            {text: "Arsenal", correct: true},
            {text: "Liverpool", correct: false}
        ]
    },
    {
        question: "What is the highest number of points achieved by a club in a single Premier League season?",
        answers: [
            {text: "100 points", correct: true},
            {text: "95 points", correct: false},
            {text: "102 points", correct: false},
            {text: "98 points", correct: false}
        ]
    }
]

const premHardQs = [
    {
        question: "Which player scored the fastest goal in Premier League history?",
        answers: [
            {text: "Shane Long", correct: true},
            {text: "Ledley King", correct: false},
            {text: "Alan Shearer", correct: false},
            {text: "Christian Eriksen", correct: false}
        ]
    },
    {
        question: "In which season did the Premier League first introduce the use of goal-line technology?",
        answers: [
            {text: "2012-2013", correct: false},
            {text: "2013-2014", correct: true},
            {text: "2014-2015", correct: false},
            {text: "2015-2016", correct: false}
        ]
    },
    {
        question: "Who was the first non-European manager to win the Premier League?",
        answers: [
            {text: "Arsène Wenger", correct: true},
            {text: "José Mourinho", correct: false},
            {text: "Manuel Pellegrini", correct: false},
            {text: "Claudio Ranieri", correct: false}
        ]
    },
    {
        question: "Which team finished in the highest position in their debut Premier League season?",
        answers: [
            {text: "Reading", correct: false},
            {text: "Ipswich Town", correct: true},
            {text: "Nottingham Forest", correct: false},
            {text: "Wigan Athletic", correct: false}
        ]
    },
    {
        question: "Who is the only player to have won the Premier League with three different clubs?",
        answers: [
            {text: "Nicolas Anelka", correct: false},
            {text: "Ashley Cole", correct: false},
            {text: "Carlos Tevez", correct: false},
            {text: "Robert Huth", correct: true}
        ]
    },
    {
        question: "What was the first season in which the Premier League was composed of 20 teams?",
        answers: [
            {text: "1994-1995", correct: false},
            {text: "1995-1996", correct: true},
            {text: "1992-1993", correct: false},
            {text: "1993-1994", correct: false}
        ]
    },
    {
        question: "Which club set a record for the most consecutive Premier League losses?",
        answers: [
            {text: "Sunderland", correct: true},
            {text: "Derby County", correct: false},
            {text: "Norwich City", correct: false},
            {text: "Portsmouth", correct: false}
        ]
    },
    {
        question: "Who is the highest-scoring midfielder in Premier League history?",
        answers: [
            {text: "Frank Lampard", correct: true},
            {text: "Steven Gerrard", correct: false},
            {text: "Ryan Giggs", correct: false},
            {text: "Paul Scholes", correct: false}
        ]
    },
    {
        question: "Which goalkeeper has the most clean sheets in Premier League history?",
        answers: [
            {text: "David Seaman", correct: false},
            {text: "Petr Čech", correct: true},
            {text: "Edwin van der Sar", correct: false},
            {text: "Peter Schmeichel", correct: false}
        ]
    },
    {
        question: "Which player has made the most Premier League appearances without ever winning the title?",
        answers: [
            {text: "Gareth Barry", correct: true},
            {text: "Jamie Carragher", correct: false},
            {text: "Mark Schwarzer", correct: false},
            {text: "Leighton Baines", correct: false}
        ]
    }
];

/*Scottish league*/
const scotEasyQs = [
    {
        question: "Which team has won the most Scottish Premiership titles?",
        answers: [
            {text: "Celtic", correct: true},
            {text: "Rangers", correct: false},
            {text: "Aberdeen", correct: false},
            {text: "Heart of Midlothian", correct: false}
        ]
    },
    {
        question: "What color are the home jerseys of Rangers Football Club?",
        answers: [
            {text: "Red", correct: false},
            {text: "Green", correct: false},
            {text: "Blue", correct: true},
            {text: "Yellow", correct: false}
        ]
    },
    {
        question: "In which city is the Scottish Premiership team Hibernian based?",
        answers: [
            {text: "Glasgow", correct: false},
            {text: "Edinburgh", correct: true},
            {text: "Aberdeen", correct: false},
            {text: "Dundee", correct: false}
        ]
    },
    {
        question: "Which of the following teams has never won the Scottish Premiership?",
        answers: [
            {text: "Celtic", correct: false},
            {text: "Rangers", correct: false},
            {text: "Kilmarnock", correct: false},
            {text: "Inverness Caledonian Thistle", correct: true}
        ]
    },
    {
        question: "What is the nickname of Heart of Midlothian Football Club?",
        answers: [
            {text: "The Saints", correct: false},
            {text: "The Jambos", correct: true},
            {text: "The Dons", correct: false},
            {text: "The Hibees", correct: false}
        ]
    }
];


const scotMediumQs = [
    {
        question: "Which Scottish Premiership team is known as 'The Dons'?",
        answers: [
            {text: "Dundee United", correct: false},
            {text: "Aberdeen", correct: true},
            {text: "Ross County", correct: false},
            {text: "St Johnstone", correct: false}
        ]
    },
    {
        question: "In what year did the Scottish Premiership replace the Scottish Premier League (SPL)?",
        answers: [
            {text: "2010", correct: false},
            {text: "2013", correct: true},
            {text: "2016", correct: false},
            {text: "2018", correct: false}
        ]
    },
    {
        question: "Which player holds the record for the most goals in a single Scottish Premiership season?",
        answers: [
            {text: "Henrik Larsson", correct: false},
            {text: "Alfredo Morelos", correct: false},
            {text: "Brian Laudrup", correct: false},
            {text: "Kris Boyd", correct: true}
        ]
    },
    {
        question: "Which club's home ground is called Pittodrie Stadium?",
        answers: [
            {text: "Dundee", correct: false},
            {text: "Aberdeen", correct: true},
            {text: "Hamilton Academical", correct: false},
            {text: "Kilmarnock", correct: false}
        ]
    },
    {
        question: "Who was named the Scottish Premiership Player of the Year for the 2019-2020 season?",
        answers: [
            {text: "Odsonne Édouard", correct: true},
            {text: "Alfredo Morelos", correct: false},
            {text: "James Forrest", correct: false},
            {text: "Callum McGregor", correct: false}
        ]
    },
    {
        question: "Which team was promoted to the Scottish Premiership for the 2020-2021 season?",
        answers: [
            {text: "Heart of Midlothian", correct: false},
            {text: "Dundee United", correct: true},
            {text: "Dunfermline Athletic", correct: false},
            {text: "Partick Thistle", correct: false}
        ]
    },
    {
        question: "What is the maximum capacity of Celtic Park?",
        answers: [
            {text: "52,063", correct: false},
            {text: "60,832", correct: true},
            {text: "48,500", correct: false},
            {text: "50,947", correct: false}
        ]
    },
    {question: "What is the maximum capacity of Ibrox Stadium, home of Rangers FC?",
        answers: [
            {text: "50,817", correct: true},
            {text: "60,000", correct: false},
            {text: "48,500", correct: false},
            {text: "52,063", correct: false}
        ]
    },
    {
        question: "Which manager led Celtic to a treble-treble (three consecutive domestic trebles)?",
        answers: [
            {text: "Neil Lennon", correct: false},
            {text: "Brendan Rodgers", correct: true},
            {text: "Gordon Strachan", correct: false},
            {text: "Martin O'Neill", correct: false}
        ]
    },
    {
        question: "Which of these clubs has not played in the Scottish Premiership since its inception in 2013?",
        answers: [
            {text: "Raith Rovers", correct: true},
            {text: "Livingston", correct: false},
            {text: "Ross County", correct: false},
            {text: "Partick Thistle", correct: false}
        ]
    }
];

const scotHardQs = [
    {
        question: "Who was the first player to win the Scottish Premiership Player of the Year award?",
        answers: [
            {text: "Brian Laudrup", correct: false},
            {text: "Henrik Larsson", correct: false},
            {text: "Ally McCoist", correct: true},
            {text: "Scott Brown", correct: false}
        ]
    },
    {
        question: "Which Scottish Premiership club is based in Dingwall?",
        answers: [
            {text: "Ross County", correct: true},
            {text: "Inverness Caledonian Thistle", correct: false},
            {text: "Elgin City", correct: false},
            {text: "Forfar Athletic", correct: false}
        ]
    },
    {
        question: "What was the original name of the Scottish Premiership when it was founded?",
        answers: [
            {text: "Scottish Football League", correct: false},
            {text: "Scottish Premier Division", correct: true},
            {text: "Scottish Premier League", correct: false},
            {text: "Scottish National League", correct: false}
        ]
    },
    {
        question: "Which player has won the most Scottish Premiership titles as of 2021?",
        answers: [
            {text: "Ryan Giggs", correct: false},
            {text: "Steven Gerrard", correct: false},
            {text: "Scott Brown", correct: true},
            {text: "Kris Boyd", correct: false}
        ]
    },
    {
        question: "Which Scottish Premiership club has the nickname 'The Doonhamers'?",
        answers: [
            {text: "Queen of the South", correct: true},
            {text: "Ayr United", correct: false},
            {text: "Dunfermline Athletic", correct: false},
            {text: "Raith Rovers", correct: false}
        ]
    },
    {
        question: "In which year did the Scottish Premiership switch to its current name from the Scottish Premier League?",
        answers: [
            {text: "2010", correct: false},
            {text: "2013", correct: true},
            {text: "2015", correct: false},
            {text: "2012", correct: false}
        ]
    },
    {
        question: "Who holds the record for the most appearances in the Scottish Premiership?",
        answers: [
            {text: "Gordon Strachan", correct: false},
            {text: "Alex McLeish", correct: false},
            {text: "Willie Miller", correct: true},
            {text: "Danny McGrain", correct: false}
        ]
    },
    {
        question: "Which Scottish Premiership team has their stadium located closest to the sea?",
        answers: [
            {text: "Aberdeen", correct: true},
            {text: "Celtic", correct: false},
            {text: "Rangers", correct: false},
            {text: "Inverness Caledonian Thistle", correct: false}
        ]
    },
    {
        question: "Which team won the first Scottish Premiership title after its rebranding in 2013?",
        answers: [
            {text: "Celtic", correct: true},
            {text: "Rangers", correct: false},
            {text: "Aberdeen", correct: false},
            {text: "Dundee United", correct: false}
        ]
    },
    {
        question: "What is the record for the highest number of points in a single Scottish Premiership season?",
        answers: [
            {text: "106 points", correct: true},
            {text: "97 points", correct: false},
            {text: "89 points", correct: false},
            {text: "102 points", correct: false}
        ]
    }
];

/*La Liga questions*/
const laLigaEasyQs = [
    {
        question: "Which club has won the most La Liga titles?",
        answers: [
            {text: "Barcelona", correct: false},
            {text: "Real Madrid", correct: true},
            {text: "Atletico Madrid", correct: false},
            {text: "Valencia", correct: false}
        ]
    },
    {
        question: "Who is known as 'El Clásico' rivals?",
        answers: [
            {text: "Barcelona and Valencia", correct: false},
            {text: "Real Madrid and Atletico Madrid", correct: false},
            {text: "Barcelona and Real Madrid", correct: true},
            {text: "Sevilla and Betis", correct: false}
        ]
    },
    {
        question: "In which city is the Camp Nou stadium located?",
        answers: [
            {text: "Madrid", correct: false},
            {text: "Barcelona", correct: true},
            {text: "Valencia", correct: false},
            {text: "Seville", correct: false}
        ]
    },
    {
        question: "Which player has won the most Ballon d'Or awards while playing in La Liga?",
        answers: [
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Lionel Messi", correct: true},
            {text: "Zinedine Zidane", correct: false},
            {text: "Ronaldinho", correct: false}
        ]
    },
    {
        question: "What is the nickname for Atletico Madrid?",
        answers: [
            {text: "Los Blancos", correct: false},
            {text: "Los Che", correct: false},
            {text: "Los Colchoneros", correct: true},
            {text: "Los Leones", correct: false}
        ]
    }
];

const laLigaMediumQs = [
    {
        question: "Who holds the record for the most goals in a single La Liga season?",
        answers: [
            {text: "Lionel Messi", correct: true},
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Telmo Zarra", correct: false},
            {text: "Hugo Sanchez", correct: false}
        ]
    },
    {
        question: "Which team won their first La Liga title in the 21st century?",
        answers: [
            {text: "Real Sociedad", correct: false},
            {text: "Deportivo La Coruña", correct: true},
            {text: "Valencia", correct: false},
            {text: "Sevilla", correct: false}
        ]
    },
    {
        question: "As of 2021, which player has made the most appearances in La Liga?",
        answers: [
            {text: "Andoni Zubizarreta", correct: true},
            {text: "Raúl Gonzalez", correct: false},
            {text: "Iker Casillas", correct: false},
            {text: "Xavi Hernandez", correct: false}
        ]
    },
    {
        question: "Which La Liga team is known as 'Los Armeros' (The Gunsmiths)?",
        answers: [
            {text: "Eibar", correct: true},
            {text: "Alavés", correct: false},
            {text: "Villarreal", correct: false},
            {text: "Getafe", correct: false}
        ]
    },
    {
        question: "Who was the first player to score in 21 consecutive La Liga seasons?",
        answers: [
            {text: "Lionel Messi", correct: true},
            {text: "Raul Gonzalez", correct: false},
            {text: "Sergio Ramos", correct: false},
            {text: "Karim Benzema", correct: false}
        ]
    },
    {
        question: "What is the record for the most points in a single La Liga season?",
        answers: [
            {text: "100 points", correct: true},
            {text: "98 points", correct: false},
            {text: "96 points", correct: false},
            {text: "94 points", correct: false}
        ]
    },
    {
        question: "Which club is known for its policy of signing Basque players only?",
        answers: [
            {text: "Real Sociedad", correct: false},
            {text: "Athletic Bilbao", correct: true},
            {text: "Osasuna", correct: false},
            {text: "Alavés", correct: false}
        ]
    },
    {
        question: "Who is the youngest player to debut in La Liga?",
        answers: [
            {text: "Ansu Fati", correct: false},
            {text: "Luka Romero", correct: true},
            {text: "Bojan Krkić", correct: false},
            {text: "Martin Odegaard", correct: false}
        ]
    },
    {
        question: "Which team broke the duopoly of Barcelona and Real Madrid by winning La Liga in the 2013-2014 season?",
        answers: [
            {text: "Valencia", correct: false},
            {text: "Atletico Madrid", correct: true},
            {text: "Sevilla", correct: false},
            {text: "Villarreal", correct: false}
        ]
    },
    {
        question: "What is the capacity of Real Madrid's Santiago Bernabeu Stadium after its latest renovation?",
        answers: [
            {text: "81,044", correct: true},
            {text: "78,000", correct: false},
            {text: "75,000", correct: false},
            {text: "85,454", correct: false}
        ]
    }
];

const laLigaHardQs = [
    {
        question: "Which club won La Liga in the 1999-2000 season, breaking a 19-year drought?",
        answers: [
            {text: "Deportivo La Coruña", correct: true},
            {text: "Valencia", correct: false},
            {text: "Real Sociedad", correct: false},
            {text: "Atletico Madrid", correct: false}
        ]
    },
    {
        question: "Who was the first African player to win the Pichichi Trophy as La Liga's top scorer?",
        answers: [
            {text: "Samuel Eto'o", correct: true},
            {text: "Yaya Toure", correct: false},
            {text: "Seydou Keita", correct: false},
            {text: "Frederic Kanoute", correct: false}
        ]
    },
    {
        question: "Which player scored the fastest hat-trick in La Liga history?",
        answers: [
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Lionel Messi", correct: false},
            {text: "David Villa", correct: false},
            {text: "Beñat San José", correct: true}
        ]
    },
    {
        question: "In what year did La Liga introduce the VAR (Video Assistant Referee) system?",
        answers: [
            {text: "2017", correct: false},
            {text: "2018", correct: true},
            {text: "2019", correct: false},
            {text: "2020", correct: false}
        ]
    },
    {
        question: "Which club has the distinction of never being relegated from La Liga?",
        answers: [
            {text: "Barcelona", correct: true},
            {text: "Real Madrid", correct: true},
            {text: "Athletic Bilbao", correct: true},
            {text: "All of the above", correct: true}
        ]
    },
    {
        question: "What unique achievement did Athletic Bilbao's Telmo Zarra hold for decades?",
        answers: [
            {text: "Most goals in a single season", correct: false},
            {text: "Most La Liga titles", correct: false},
            {text: "Most career La Liga goals", correct: true},
            {text: "Most career La Liga assists", correct: false}
        ]
    },
    {
        question: "Which goalkeeper has the most Zamora Trophies for the fewest goals conceded in a season?",
        answers: [
            {text: "Iker Casillas", correct: false},
            {text: "Victor Valdes", correct: false},
            {text: "Antoni Ramallets", correct: true},
            {text: "Jan Oblak", correct: true}
        ]
    },
    {
        question: "Which La Liga club is known as 'Los Granotas' (The Frogs)?",
        answers: [
            {text: "Levante", correct: true},
            {text: "Real Betis", correct: false},
            {text: "Villarreal", correct: false},
            {text: "Celta Vigo", correct: false}
        ]
    },
    {
        question: "Who was the first player to win the European Golden Shoe while playing in La Liga?",
        answers: [
            {text: "Hugo Sanchez", correct: true},
            {text: "Lionel Messi", correct: false},
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Diego Forlan", correct: false}
        ]
    },
    {
        question: "Which team has the record for the longest streak without conceding a goal in La Liga?",
        answers: [
            {text: "Atletico Madrid", correct: true},
            {text: "Barcelona", correct: false},
            {text: "Real Madrid", correct: false},
            {text: "Valencia", correct: false}
        ]
    }
];


let currentQuestionIndex = 0;
let currentScore = 0;
let difficulty; // Define difficulty
let league; // Define league

let mainScreen = document.querySelector('.main-screen');

function gameOpener() {
    setTimeout(function() {
        let welcomeDiv = document.querySelector('.welcome');
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
    const tutorial = document.querySelector('.tutorial');

    if(startDiv){
        startDiv.addEventListener('click', startGame);
    }
    if(difficultyDiv){
        difficultyDiv.addEventListener('click', diffChoice);
    }
    if(leagueDiv){
        leagueDiv.addEventListener('click', leagueChoice);
    }
    if (rulesDiv){
        rulesDiv.addEventListener('click', function(){
            tutorial.classList.remove('hidden');
        });
    }
};


function leagueChoice(){
    mainScreen.innerHTML = `<div class="start-menu leagues" id="premier-league">
    <img src='assets/images/prem_logo.png' alt='premier league logo'>
    <p>Premier League</p>
    </div>
    <div class="start-menu leagues" id="scottish-league">
    <img src='assets/images/scot_prem.png' alt='premier league logo'>
    <p>Scottish League</p>
    </div>
    <div class="start-menu leagues" id="la-liga">
    <img src='assets/images/Laliga.png' alt='premier league logo'>
    <p>La Liga</p>
    </div>
    <div class='back-arrow'>
    <i class="fa-solid fa-arrow-left"></i>
    </div>`
    attachLeagueListener();
    returnHome();
}



/*these functions do not have placeholder text. This will determine the league choice by the user*/
let leagueResult = '';
function attachLeagueListener(){
    document.querySelector('#premier-league').addEventListener('click', function(){
        league = 'premier league';
        console.log('The league is set to the Premier League');
        gameOpener2();
        leagueUpper(league);
    });
    document.querySelector('#scottish-league').addEventListener('click', function(){
        league = 'scottish league';
        console.log('The league is set to the scottish premiership')
        gameOpener2();
        leagueUpper(league);
    });
    document.querySelector('#la-liga').addEventListener('click', function(){
        league = 'la liga';
        console.log('The league is set to the Spanish La Liga')
        gameOpener2();
        leagueUpper(league);
    });
};

function leagueUpper(league){
    leagueResult = league.charAt(0).toUpperCase() + league.slice(1);
    console.log(leagueResult);
};
function returnHome(){
    let backArrows = document.querySelectorAll('.back-arrow');
    for (let i = 0; i < backArrows.length; i++){
        backArrows[i].addEventListener('click', gameOpener2);
    };
};


/*this determines and logs the users difficulty choice*/

function diffChoice(){
    mainScreen.innerHTML = 
    `<div class="start-menu difficulty" id="easy">
    <p>Beginner</p>
    <i class="fa-solid fa-star fa-2x star-gold"></i>
    </div>
    <div class="start-menu difficulty" id="intermediate">
    <p>World Class</p>
    <i class="fa-solid fa-star fa-2x star-gold"></i><i class="fa-solid fa-star fa-2x star-gold"></i><i class="fa-solid fa-star fa-2x star-gold"></i>
    </div>
    <div class="start-menu difficulty" id="hard">
    <p>Ultimate</p>
    <i class="fa-solid fa-star fa-2x star-gold"></i><i class="fa-solid fa-star fa-2x star-gold"></i><i class="fa-solid fa-star fa-2x star-gold"></i><i class="fa-solid fa-star fa-2x star-gold"></i><i class="fa-solid fa-star fa-2x star-gold"></i>
    </div>
    <div class='back-arrow'>
    <i class="fa-solid fa-arrow-left"></i>
    </div>`
    attachDiffListener();
    returnHome();
};

function attachDiffListener(){
    document.querySelector('#easy').addEventListener('click', setDifficulty);
    document.querySelector('#intermediate').addEventListener('click', setDifficulty);
    document.querySelector('#hard').addEventListener('click', setDifficulty);
};

let diffResult = ''
function setDifficulty(event){
    difficulty = event.target.id;
    console.log(difficulty);
    gameOpener2();
    diffUpper(difficulty);
};

function diffUpper(difficulty){
    diffResult = difficulty
    console.log(diffResult);
};
/*https://www.javatpoint.com/how-to-shuffle-an-array-in-javascript how to shuffle array*/
function shuffle(array) {  
    for (let i = array.length - 1; i> 0; i--) {  
    const j = Math.floor(Math.random() * (i + 1));  
    [array[i], array[j]] = [array[j], array[i]];  
    }}
const allQuestions = [premEasyQs, premMediumQs, premHardQs, scotEasyQs, scotMediumQs, scotHardQs, laLigaEasyQs, laLigaMediumQs, laLigaHardQs]
for (let i = 0; i < allQuestions.length; i++ ){
    shuffle(allQuestions[i]);

    for (let j = 0; j < allQuestions[i].length; j++){
        shuffle(allQuestions[i][j].answers);
    }
}



let questions =[];

/*Function to start the game*/
function startGame() {
    let noChoice = document.querySelector('.no-choice')
    if(league === 'premier league'){
        if (difficulty === 'easy'){
            questions = premEasyQs;
        } else if(difficulty === 'intermediate'){
            questions = premMediumQs;
        }else if(difficulty === 'hard'){
            questions = premHardQs;
        }
        else{
            alert('Please choose a valid league and difficulty');
        };
    };
    if(league === 'scottish league'){
        if (difficulty === 'easy'){
            questions = scotEasyQs;
        } else if(difficulty === 'intermediate'){
            questions = scotMediumQs;
        }else if(difficulty === 'hard'){
            questions = scotHardQs;
        }
        else{
            alert('Please choose a valid league and difficulty');
        };
    };
    if(league === 'la liga'){
        if (difficulty === 'easy'){
            questions = laLigaEasyQs;
        } else if(difficulty === 'intermediate'){
            questions = laLigaMediumQs;
        }else if(difficulty === 'hard'){
            questions = laLigaHardQs;
        }
        else{
            noChoice.classList.remove('.hidden');
            attachEventListeners();
        };
    }

    if (questions.length > 0){
        mainScreen.innerHTML = `
                <div class='back-arrow'>
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <h2>${leagueResult} ${diffResult} edition</h2>
                <div class='quiz'>
                    <h3 id='question'>Insert question here</h3>
                    <div id='answer-buttons'></div>
                    <button id='next-btn' style='display: none;'>Next Question</button>
                </div>
            `;
            currentScore = 0;
            currentQuestionIndex = 0; // Reset question index
            showQuestion(questions);
            document.querySelector('#next-btn').addEventListener('click', nextButtonHandle); // Attach event listener after the button is added to the DOM
            returnHome();
    }else{
        noChoice.classList.remove('hidden');
        attachCloseEventListener(); 
    }
};

function attachCloseEventListener() {
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = button.parentElement.parentElement;
            modal.classList.add('hidden');
        });
    });
}



function showQuestion(questions) {
    const questionElement = document.querySelector('#question');
    const answerButtonsElement = document.querySelector('#answer-buttons');
    const nextBtn = document.querySelector('#next-btn');

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
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
            <h3 id='question'>Congratulations, you scored ${currentScore} out of ${questions.length}!</h3>
            
            <button id='home-btn' class='btn' style='display: block;'>Return Home</button>
        </div>`
        const homeBtn = document.querySelector('#home-btn');
        homeBtn.addEventListener('click', gameOpener2);
    }
   
}



function selectAnswer(e, questions) {
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
    showQuestion(questions); // Call showQuestion to update the quiz for the next question
}