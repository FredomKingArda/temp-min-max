input.onButtonPressed(Button.A, function () {
    if (tempa == 0) {
        tempa = 1
        basic.showNumber(TempMax)
    } else {
        tempa = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (tempa == 0) {
        tempa = 1
        basic.showNumber(TempMin)
    } else {
        tempa = 0
    }
})
let TempMin = 0
let TempMax = 0
let tempa = 0
let Temp = input.temperature()
loops.everyInterval(1000, function () {
    if (Temp > TempMax) {
        TempMax = Temp
    }
    if (Temp < TempMin) {
        TempMin = Temp
    }
})
basic.forever(function () {
    if (tempa == 0) {
        basic.showNumber(Temp)
    }
})
