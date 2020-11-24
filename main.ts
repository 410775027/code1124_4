basic.forever(function () {
    for (let a = 0; a <= 4; a++) {
        led.plot(a, 2)
        led.plot(2, a)
    }
})
