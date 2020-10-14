// Validar string
var name = prompt("¿Cómo te llamas?")
var lastName = prompt("¿Cual es tu apellido?")

function saludar(name, lastName) {
    if (typeof name !== "string" || typeof lastName !== "string") {
        return ("Usa un string")
    }
    return console.log("Hola " + name + ' ' + lastName);
}
console.log(saludar(name, lastName))



// sumar dos numeros

var numero1 = prompt("numero1");
var numero2 = prompt("numero2");

function sumar() {
    var suma = numero1 + numero2;
}
    console.log (suma)

