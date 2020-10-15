// area  de un rectangulo

function area (a,b) {
    b = Number (prompt('Area de un rectangulo \n Ingrese el valor de Base :'))
    a = Number (prompt('ingrese el valor de Altura'))
    var resultado = (a * b)
    alert (resultado)
}
area()


// area de un cuadrado

function area (a,b) {
    a = Number (prompt('Area de un cuadrado \n Ingrese el valor de A'))
    var resultado = (a * a)
    alert (resultado)
}
area()


// area de un triangulo

function area (a,b) {
    b = Number (prompt('Area de un Trinagulo \n ingrese el valor de Base'))
    a = Number (prompt('ingrese el valor de Altura'))
    var resultado = ((a * b) / 2)
    
    alert (resultado)
}
area()
