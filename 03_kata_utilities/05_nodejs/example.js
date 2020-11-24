// var i = 7

// for (let i = 1; i<=5; i++) {
//     console.log (i)
// }
// for (var i = 1; i<=5; i++) {
//     console.log (i)
// }

// console.log (i)

// var i = 2

// console.log(i)

// let definido por el scope
// for (let i = 1; i<=5; i++) {
//     console.log (i)
// }
// for (let i = 1; i<=5; i++) {
//     console.log (i)
// }

// const name = ["Cristian"];
// name = "jajaja";

// const name = ["Cristian"];
// console.log(name)
// name.pop();
// console.log(name)



// const persona = {
//     nombre: 'Cristian'
// }

// console.log(persona)
// persona.edad = 29
// console.log(persona)

// //delete persona(nombre)
// delete persona.nombre;
// delete persona.edad;

// console.log(persona)


// Template String


const name = 'Cristian'
console.log ('Hola mi nombre es ' + name );

console.log (`Hola mi nombre es: ${name}`);


const collection = [
    {
        id: 1,
        title: 'the book'
    },
    {
        id: 2,
        title: 'the marvel'
    }
];


const myId = 2 ;

const search = collection.find( (item) => item.id === myId).title

console.log(`Bopok title: ${search}`)