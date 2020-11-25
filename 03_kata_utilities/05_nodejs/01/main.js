const name = "Cristian"

console.log('Hola ${name}'),

const a = 10;
const b = 20;

console.log('resultado: ' a + b);

function saludar (name) {
    console.log(name);
    let mensaje = `Hola ${name}`;
    return mensaje;
}
console.log('No he ejecutado la funcion')
let saludo = saludar ('Cristian'):
console.log('ya termino de ejecutarse la funcion')

console.log(saludo)

console.log('Inicio del programa');

setTimeout(() => {
    console.log('Primer timeout')
},1000);

setTimeout(() => {
    console.log('Segunddo timeout')
},0);

setTimeout(() => {
    console.log('tercer timeout')
},0);

console.log('Fin del programa')


