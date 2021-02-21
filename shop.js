const pokeballSpend = Number(1000)
const greatballSpend = Number(2000)
const ultraballSpend = Number(3000)

if (localStorage.getItem("Pokeball" == null)) {
    localStorage.setItem("Pokeball", "0")
}

if (localStorage.getItem("Greatball" == null)) {
    localStorage.setItem("Greatball", "0")
}

if (localStorage.getItem("Ultraball" == null)) {
    localStorage.setItem("Ultraball", "0")
}

function showInventoryStats() {
    
    var nowPokedollars = localStorage.getItem("Pokedollars")
    var nowPokeballs = localStorage.getItem("Pokeball")
    var nowGreatballs = localStorage.getItem("Greatball")
    var nowUltraballs = localStorage.getItem("Ultraball")
    var nowBeastballs = localStorage.getItem("Beastball")
    var nowMasterballs = localStorage.getItem("Masterball")
    document.getElementById("pokedollars-container").innerHTML = nowPokedollars + " P"
    document.getElementById("pokeballs-container").innerHTML = nowPokeballs
    document.getElementById("greatballs-container").innerHTML = nowGreatballs
    document.getElementById("ultraballs-container").innerHTML = nowUltraballs
    document.getElementById("beastballs-container").innerHTML = nowBeastballs
    document.getElementById("masterballs-container").innerHTML = nowMasterballs
}

function buyPokeball() {  
    befSpend = Number(localStorage.getItem("Pokedollars"))
    if (befSpend < 0) {
        alert("You do not have enough Pokedollars to make this purchase!")
        console.log(befSpend)
    }
    aftSpend = befSpend - pokeballSpend
    if (aftSpend < 0) {
        alert("You do not have enough Pokedollars to make this purchase!")
        aftSpend = Number(aftSpend) + 1000
    } else {
        localStorage.setItem("Pokedollars", aftSpend)
        currentPokeball = Number(localStorage.getItem("Pokeball"))
        newPokeball = currentPokeball + 1
        localStorage.setItem("Pokeball", newPokeball)
        console.log(aftSpend)
        console.log(newPokeball)
        document.getElementById("pokedollars-container").innerHTML = aftSpend + " P"
        document.getElementById("pokeballs-container").innerHTML = newPokeball
    }
}

function buyGreatball() {  
    befSpend = Number(localStorage.getItem("Pokedollars"))
    if (befSpend < 0) {
        alert("You do not have enough Pokedollars to make this purchase!")
        console.log(befSpend)
    }
    aftSpend = befSpend - greatballSpend
    if (aftSpend < 0) {
        alert("You do not have enough Pokedollars to make this purchase!")
        aftSpend = Number(aftSpend) + 2000
    } else {
        localStorage.setItem("Pokedollars", aftSpend)
        currentGreatball = Number(localStorage.getItem("Greatball"))
        newGreatball = currentGreatball + 1
        localStorage.setItem("Greatball", newGreatball)
        console.log(aftSpend)
        console.log(newGreatball)
        document.getElementById("pokedollars-container").innerHTML = aftSpend + " P"
        document.getElementById("greatballs-container").innerHTML = newGreatball
    }
}

function buyUltraball() {  
    befSpend = Number(localStorage.getItem("Pokedollars"))
    if (befSpend < 0) {
        alert("You do not have enough Pokedollars to make this purchase!")
        console.log(befSpend)
    }
    aftSpend = befSpend - ultraballSpend
    if (aftSpend < 0) {
        alert("You do not have enough Pokedollars to make this purchase!")
        aftSpend = Number(aftSpend) + 3000
    } else {
        localStorage.setItem("Pokedollars", aftSpend)
        currentUltraball = Number(localStorage.getItem("Ultraball"))
        newUltraball = currentUltraball + 1
        localStorage.setItem("Ultraball", newUltraball)
        console.log(aftSpend)
        console.log(newUltraball)
        document.getElementById("pokedollars-container").innerHTML = aftSpend + " P"
        document.getElementById("ultraballs-container").innerHTML = newUltraball
    }
}

localStorage.setItem("Masterball", 3)
localStorage.setItem("Beastball", 3)
localStorage.setItem("Ultraball", 3)
localStorage.setItem("Pokeball", 3)
localStorage.setItem("Greatball", 3)
