const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("triviahome.html")
    

};

if (localStorage.getItem("Pokedollars" == null)) {
    localStorage.setItem("Pokedollars", "0")
}

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
  }
  
    if (mostRecentScore == "10") {
        var currencyRand = randomNumber(1,100)
        console.log(currencyRand)
        var currentCurrency = Number(localStorage.getItem("Pokedollars"))
        console.log(currentCurrency)
        var totalCurrency = localStorage.setItem("Pokedollars", currentCurrency + currencyRand)
        console.log(totalCurrency);
    }

    if (mostRecentScore == "20") {
        var currencyRand = randomNumber(101,200)
        console.log(currencyRand)
        var currentCurrency = Number(localStorage.getItem("Pokedollars"))
        console.log(currentCurrency)
        var totalCurrency = localStorage.setItem("Pokedollars", currentCurrency + currencyRand)
        console.log(totalCurrency);
    }

    if (mostRecentScore == "30") {
        var currencyRand = randomNumber(201,300)
        console.log(currencyRand)
        var currentCurrency = Number(localStorage.getItem("Pokedollars"))
        console.log(currentCurrency)
        var totalCurrency = localStorage.setItem("Pokedollars", currentCurrency + currencyRand)
        console.log(totalCurrency);
    }

    if (mostRecentScore == "40") {
        var currencyRand = randomNumber(301,400)
        console.log(currencyRand)
        var currentCurrency = Number(localStorage.getItem("Pokedollars"))
        console.log(currentCurrency)
        var totalCurrency = localStorage.setItem("Pokedollars", currentCurrency + currencyRand)
        console.log(totalCurrency);
    }


