function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
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

    }
    if (dropChance > 9) {
        var pokedollarsBack = randomNumber(3100, 3500) 
        currentPokedollars = Number(localStorage.getItem("Pokedollars"))
        newPokedollars = currentPokedollars + pokedollarsBack
        localStorage.setItem("Pokedollars", newPokedollars)
        alert("You got " + pokedollarsBack + "P, better luck next time!")
        console.log(pokedollarsBack)
    }
}

setTimeout(masterballDrops, 1000)