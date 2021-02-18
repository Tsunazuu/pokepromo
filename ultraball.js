function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
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

setTimeout(ultraballDrops, 1000)