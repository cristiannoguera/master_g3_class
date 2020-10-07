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