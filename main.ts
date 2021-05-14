let Luminosidad = 0
let Proporcionalidad = 0
input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, input.lightLevel())
    Luminosidad = pins.analogReadPin(AnalogPin.P0)
    Proporcionalidad = pins.map(
    Luminosidad,
    0,
    255,
    0,
    100
    )
    if (Proporcionalidad > 0 && Proporcionalidad <= 33) {
        led.setBrightness(255)
        basic.showIcon(IconNames.Skull)
    } else if (Proporcionalidad > 33 && Proporcionalidad <= 66) {
        led.setBrightness(128)
        basic.showIcon(IconNames.Skull)
    } else {
        led.setBrightness(0)
        basic.showIcon(IconNames.Skull)
    }
})
