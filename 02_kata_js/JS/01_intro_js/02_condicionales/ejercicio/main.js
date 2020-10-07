// numero parImpar
// valida si es una letra

/*var numero = prompt ("ingresa un numero");
numero = Number(numero);

if (isNaN(numero)) {
    console.error ('Esto no es un numero');
} else {
    if (numero % 2 === 0) {
        console.log ('Es par')
    } else {
        console.log ('Es impar')
    }
}*/

//Validar si se puede conducir

var edadPregunta = prompt('Que edad tienes?');

var edadNumero = Number(edadPregunta);

if (edadNumero >= 18 && edadNumero <= 80) {
    console.log('Puedes conducir')
}else if (edadNumero === 16 || edadNumero ==17) {
    console.log(' Puedes sacar tu permiso para conducir')
}else if (edadNumero <=15 || edadNumero >80) {
    console.warn('No puedes conducir por tu seguridad')
}else {
    console.error('No es una edad');
}


//-------- Challenge 2 --------
// Juego de piedra papel o tijera :scissors: ⛰ :page_with_curl:
// Preguntar a 2 usuarios que opcion eleguir
// Mostrar en consola que jugador gano

