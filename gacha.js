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

function showPokeballs() {
    var nowPokeballs = localStorage.getItem("Pokeball")
    document.getElementById("pokeballs-container-2").innerHTML = nowPokeballs
}

function showGreatballs() {
    var nowGreatballs = localStorage.getItem("Greatball")
    document.getElementById("greatballs-container-2").innerHTML = nowGreatballs
}

function showUltraballs() {
    var nowUltraballs = localStorage.getItem("Ultraball")
    document.getElementById("ultraballs-container-2").innerHTML = nowUltraballs
}

function showBeastballs() {
    var nowBeastballs = localStorage.getItem("Beastball")
    document.getElementById("beastballs-container-2").innerHTML = nowBeastballs
}

function showMasterballs() {
    var nowMasterballs = localStorage.getItem("Masterball")
    document.getElementById("masterballs-container-2").innerHTML = nowMasterballs
}

function showVouchers() {
    var nowVoucherTwo = localStorage.getItem("voucher2")
    var nowVoucherFive = localStorage.getItem("voucher5")
    var nowVoucherTen = localStorage.getItem("voucher10")
    document.getElementById("voucher-two-text-2").innerHTML = nowVoucherTwo
    document.getElementById("voucher-five-text-2").innerHTML = nowVoucherFive
    document.getElementById("voucher-ten-text-2").innerHTML = nowVoucherTen

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
    }
}

function openUltraball() {
    currentUltraball = Number(localStorage.getItem("Ultraball"))
    if (currentUltraball <= "0") {
        alert("You do not have any Ultra balls!")
    } else {
        window.location.assign("openultraball.html")
        newUltraball = currentUltraball - 1
        localStorage.setItem("Ultraball", newUltraball)
        console.log(newUltraball)
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
    }
}

//localStorage.setItem("Beastball", 3)
//localStorage.setItem("Pokeball", 21)
//localStorage.setItem("Greatball", 10)
//localStorage.setItem("Ultraball", 8)
//localStorage.setItem("Masterball", 2)
