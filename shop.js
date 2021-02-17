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
    }
}
localStorage.setItem("Pokeball", "0")
localStorage.setItem("Greatball", "5")
localStorage.setItem("Ultraball", "5")
localStorage.setItem("Masterball", "5")
localStorage.setItem("Beastball", "5")


