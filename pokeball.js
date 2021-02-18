function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
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

setTimeout(pokeballDrops, 1000)