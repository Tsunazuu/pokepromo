function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
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

setTimeout(beastballDrops, 1000)