input.onButtonPressed(Button.A, function () {
    radio.sendString("CFAEGDC")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(3)
