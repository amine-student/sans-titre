input.onButtonPressed(Button.A, function () {
    if (Mypass == "123C") {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            # # . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Mypass = ""
    }
})
let MyInput = ""
let Mypass = ""
keypad.setKeyPad4(
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13,
DigitalPin.P12,
DigitalPin.P8,
DigitalPin.P2,
DigitalPin.P1,
DigitalPin.P0
)
basic.forever(function () {
    MyInput = keypad.getKeyString()
    if (MyInput != "") {
        basic.showString(keypad.getKeyString())
        Mypass += MyInput
        basic.clearScreen()
    }
})
