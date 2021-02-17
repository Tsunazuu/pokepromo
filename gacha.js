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

if (localStorage.getItem("voucher2" == null)) {
    localStorage.setItem("voucher2", "0")
}

if (localStorage.getItem("voucher5" == null)) {
    localStorage.setItem("voucher5", "0")
}

if (localStorage.getItem("voucher10" == null)) {
    localStorage.setItem("voucher10", "0")
}

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
  }

function openPokeball() {
    currentPokeball = Number(localStorage.getItem("Pokeball"))
    if (currentPokeball <= "0") {
        alert("You do not have any Pokeballs!")
    } else {
        window.location.assign("openpokeball.html")
        newPokeball = currentPokeball - 1
        localStorage.setItem("Pokeball", newPokeball)
        console.log(newPokeball)
    }
}

function openGreatball() {
    currentGreatball = Number(localStorage.getItem("Greatball"))
    if (currentGreatball <= "0") {
        alert("You do not have any Great balls!")
    } else {
        window.location.assign("opengreatball.html")
        newGreatball = currentGreatball - 1
        localStorage.setItem("Greatball", newGreatball)
        console.log(newGreatball)
        greatballDrops()
    }
}

function openUltraball() {
    currentUltraball = Number(localStorage.getItem("Ultraball"))
    if (currentUltraball <= "0") {
        alert("You do not have any Ultra balls!")
    } else {
        //window.location.assign("openultraball.html")
        newUltraball = currentUltraball - 1
        localStorage.setItem("Ultraball", newUltraball)
        console.log(newUltraball)
        ultraballDrops()
    }
}

function openMasterball() {
    currentMasterball = Number(localStorage.getItem("Masterball"))
    if (currentMasterball <= "0") {
        alert("You do not have any Master balls!")
    } else {
        window.location.assign("openmasterball.html")
        newMasterball = currentMasterball - 1
        localStorage.setItem("Masterball", newMasterball)
        console.log(newMasterball)
        masterballDrops()
    }
}

function openBeastball() {
    currentBeastball = Number(localStorage.getItem("Beastball"))
    if (currentBeastball <= "0") {
        alert("You do not have any Beast balls!")
    } else {
        window.location.assign("openbeastball.html")
        newBeastball = currentBeastball - 1
        localStorage.setItem("Beastball", newBeastball)
        console.log(newBeastball)
        beastballDrops()
    }
}

function pokeballDrops() {
    var dropChance = randomNumber(1, 100)
    if (dropChance <= 2) {
        currentVoucher2 = Number(localStorage.getItem("voucher2"))
        newVoucher2 = currentVoucher2 + 1
        localStorage.setItem("voucher2", newVoucher2)
        alert("You got 1 $2 voucher, congratulations!")
        console.log(newVoucher2)
    } else {
        var pokedollarsBack = randomNumber(700, 1100)
        alert("You got " + pokedollarsBack + "P, better luck next time!")
        currentPokedollars = Number(localStorage.getItem("Pokedollars"))
        newPokedollars = currentPokedollars + pokedollarsBack
        localStorage.setItem("Pokedollars", newPokedollars)
        console.log(pokedollarsBack)
    }
}

function greatballDrops() {
    var dropChance = randomNumber(1, 100)
    if (dropChance <= 5) {
        currentVoucher2 = Number(localStorage.getItem("voucher2"))
        alert("You got 1 $2 voucher, congratulations!")
        newVoucher2 = currentVoucher2 + 1
        localStorage.setItem("voucher2", newVoucher2)
        console.log(newVoucher2)
    } else {
        var pokedollarsBack = randomNumber(1500, 1900) 
        alert("You got " + pokedollarsBack + "P, better luck next time!")
        currentPokedollars = Number(localStorage.getItem("Pokedollars"))
        newPokedollars = currentPokedollars + pokedollarsBack
        localStorage.setItem("Pokedollars", newPokedollars)
        console.log(pokedollarsBack)
    }
}

function ultraballDrops() {
    var dropChance = randomNumber(1, 100)
    if (dropChance <= 5) {
        currentVoucher2 = Number(localStorage.getItem("voucher2"))
        newVoucher2 = currentVoucher2 + 1
        localStorage.setItem("voucher2", newVoucher2)
        alert("You got 1 $2 voucher, congratulations!")
        console.log(newVoucher2)
    }
    if (dropChance > 5 && dropChance <= 7) {
        currentVoucher5 = Number(localStorage.getItem("voucher5"))
        newVoucher5 = currentVoucher5 + 1
        localStorage.setItem("voucher5", newVoucher5)
        alert("You got 1 $5 voucher, congratulations!")
        console.log(newVoucher5)
    }
    if (dropChance > 7) {
        var pokedollarsBack = randomNumber(2300, 2700) 
        currentPokedollars = Number(localStorage.getItem("Pokedollars"))
        newPokedollars = currentPokedollars + pokedollarsBack
        localStorage.setItem("Pokedollars", newPokedollars)
        alert("You got " + pokedollarsBack + "P, better luck next time!")
        console.log(pokedollarsBack)
    }
}

function masterballDrops() {
    var dropChance = randomNumber(1, 100)
    if (dropChance <= 7) {
        currentVoucher5 = Number(localStorage.getItem("voucher5"))
        newVoucher5 = currentVoucher5 + 1
        localStorage.setItem("voucher5", newVoucher5)
        alert("You got 1 $5 voucher, congratulations!")
        console.log(newVoucher5)
    }
    if (dropChance > 7 && dropChance <= 9) {
        currentVoucher10 = Number(localStorage.getItem("voucher10"))
        newVoucher10 = currentVoucher10 + 1
        localStorage.setItem("voucher10", newVoucher10)
        alert("You got 1 $10 voucher, congratulations!")
        console.log(newVoucher10)

    } else {
        var pokedollarsBack = randomNumber(3100, 3500) 
        currentPokedollars = Number(localStorage.getItem("Pokedollars"))
        newPokedollars = currentPokedollars + pokedollarsBack
        localStorage.setItem("Pokedollars", newPokedollars)
        alert("You got " + pokedollarsBack + "P, better luck next time!")
        console.log(pokedollarsBack)
    }
}

function beastballDrops() {
    var dropChance = randomNumber(1, 100)
    if (dropChance <= 10) {
        currentVoucher5 = Number(localStorage.getItem("voucher2"))
        newVoucher5 = currentVoucher5 + 1
        localStorage.setItem("voucher5", newVoucher5)
        alert("You got 1 $5 voucher, congratulations!")
        console.log(newVoucher5)
    }
    if (dropChance > 10 && dropChance <= 15) {
        currentVoucher10 = Number(localStorage.getItem("voucher10"))
        newVoucher10 = currentVoucher10 + 1
        localStorage.setItem("voucher10", newVoucher10)
        alert("You got 1 $10 voucher, congratulations!")
        console.log(newVoucher10)

    } else {
        var pokedollarsBack = randomNumber(3900, 4300) 
        currentPokedollars = Number(localStorage.getItem("Pokedollars"))
        newPokedollars = currentPokedollars + pokedollarsBack
        localStorage.setItem("Pokedollars", newPokedollars)
        alert("You got " + pokedollarsBack + "P, better luck next time!")
        console.log(pokedollarsBack)
    }
}