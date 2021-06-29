let X = 0
let Y = 0
basic.forever(function () {
    X = 0
    Y = 0
    while (Y <= 4) {
        led.plot(X, Y)
        basic.pause(200)
        led.unplot(X, Y)
        Y += 1
    }
})
