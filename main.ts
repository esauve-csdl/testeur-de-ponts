let valor_string = ""
let ceros = ""
let valor: number = 0
HX711.SetPIN_DOUT(DigitalPin.P0)
HX711.SetPIN_SCK(DigitalPin.P8)
HX711.begin()
HX711.set_scale(100000)
HX711.tare(1)
basic.pause(1000)
HX711.power_up()
basic.forever(function () {
    valor = HX711.get_units(1)
    ceros = ""
    if (Math.abs(Math.round((valor - Math.trunc(valor)) * 100)).toString().length == 0) {
        ceros = "00"
    } else if (Math.abs(Math.round((valor - Math.trunc(valor)) * 100)).toString().length == 1) {
        ceros = "0"
    }
    valor_string = "" + Math.trunc(valor) + "." + ceros + Math.abs(Math.round((valor - Math.trunc(valor)) * 100))
    serial.writeLine(valor_string)
})
