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

if (localStorage.getItem("Pokeball" == null)) {
    localStorage.setItem("Pokeball", "0")
}

if (localStorage.getItem("Greatball" == null)) {
    localStorage.setItem("Greatball", "0")
}

if (localStorage.getItem("Ultraball" == null)) {
    localStorage.setItem("Ultraball", "0")
}

if (localStorage.getItem("Masterball" == null)) {
    localStorage.setItem("Masterball", "0")
}

if (localStorage.getItem("Beastball" == null)) {
    localStorage.setItem("Beastball", "0")
}

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
  }
  
    if (mostRecentScore == "10") {
        var randomNo = randomNumber(1,100)
        if (randomNo <= 2) {
            currentPokeball = Number(localStorage.getItem("Pokeball"))
            newPokeball = currentPokeball + 1
            localStorage.setItem("Pokeball", newPokeball)
            console.log(newPokeball)
            alert("Congratulations! You got 1 Pokeball!")
        } else {
            var currencyRand = randomNumber(1,100)
            console.log(currencyRand)
            var currentCurrency = Number(localStorage.getItem("Pokedollars"))
            console.log(currentCurrency)
            var totalCurrency = localStorage.setItem("Pokedollars", currentCurrency + currencyRand)
            console.log(totalCurrency);
            alert("Congratulations! You have earned " + currencyRand + "P!")
        }
    }

    if (mostRecentScore == "20") {
        var randomNo = randomNumber(1,100)
        if (randomNo <= 5) {
            currentPokeball = Number(localStorage.getItem("Pokeball"))
            newPokeball = currentPokeball + 1
            localStorage.setItem("Pokeball", newPokeball)
            console.log(newPokeball)
            alert("Congratulations! You got 1 Pokeball!")
        } else {
            var currencyRand = randomNumber(101,200)
            console.log(currencyRand)
            var currentCurrency = Number(localStorage.getItem("Pokedollars"))
            console.log(currentCurrency)
            var totalCurrency = localStorage.setItem("Pokedollars", currentCurrency + currencyRand)
            console.log(totalCurrency);
            alert("Congratulations! You have earned " + currencyRand + "P!")
        }
    }

    if (mostRecentScore == "30") {
        var randomNo = randomNumber(1,100)
        if (randomNo <= 5) {
            currentGreatball = Number(localStorage.getItem("Greatball"))
            newGreatball = currentGreatball + 1
            localStorage.setItem("Greatball", newGreatball)
            console.log(newGreatball)
            alert("Congratulations! You got 1 Great ball!")
        }
        if (randomNo > 5 && randomNo <= 7) {
            currentUltraball = Number(localStorage.getItem("Ultraball"))
            newUltraball = currentUltraball + 1
            localStorage.setItem("Ultraball", newUltraball)
            console.log(newUltraball)
            alert("Congratulations! You got 1 Ultra ball!")
        }
        if (randomNo > 7 && randomNo <= 8) {
            currentMasterball = Number(localStorage.getItem("Masterball"))
            newMasterball = currentMasterball + 1
            localStorage.setItem("Masterball", newMasterball)
            console.log(newMasterball)
            alert("Congratulations! You got 1 Master ball!")
        } else {
            var currencyRand = randomNumber(201,300)
            console.log(currencyRand)
            var currentCurrency = Number(localStorage.getItem("Pokedollars"))
            console.log(currentCurrency)
            var totalCurrency = localStorage.setItem("Pokedollars", currentCurrency + currencyRand)
            console.log(totalCurrency);
            alert("Congratulations! You have earned " + currencyRand + "P!")
        }
    }

    if (mostRecentScore == "40") {
        var randomNo = randomNumber(1,100)
        if (randomNo <= 3) {
            currentMasterball = Number(localStorage.getItem("Masterball"))
            newMasterball = currentMasterball + 1
            localStorage.setItem("Masterball", newMasterball)
            console.log(newMasterball)
            alert("Congratulations! You got 1 Master ball!")
        }
        if (randomNo > 3 && randomNo <= 4) {
            currentBeastball = Number(localStorage.getItem("Beastball"))
            newBeastball = currentBeastball + 1
            localStorage.setItem("Beastball", newBeastball)
            console.log(newBeastball)
            alert("Congratulations! You got 1 Beast ball!")
        } else {
            var currencyRand = randomNumber(301,400)
            console.log(currencyRand)
            var currentCurrency = Number(localStorage.getItem("Pokedollars"))
            console.log(currentCurrency)
            var totalCurrency = localStorage.setItem("Pokedollars", currentCurrency + currencyRand)
            console.log(totalCurrency);
            alert("Congratulations! You have earned " + currencyRand + "P!")
        }
    }


