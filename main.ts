radio.onReceivedValue(function (name, value) {
    basic.showNumber(value)
    basic.showString(name)
    serial.writeValue(name, value)
})
radio.setGroup(1)
serial.redirectToUSB()
basic.showString("R")
