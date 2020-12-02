const request = require('request');


// request.get('https://pokeapi.co/api/v2/pokemon/25', (error, response, body) => {
//     if (response.statusCode === 200) {
//         const data = JSON.parse(body)
//         //console.log(data);
//         console.log(`${data.name} esta nice`)

//     }else {
//         console.error(`'Ocurrio un error en la peticion ${error}`);
//     }
// });


const pedirPokemon = (pokemon) => {
    request.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (error, response, body) => {
    if (response.statusCode === 200) {
        const data = JSON.parse(body)
        //console.log(data);
        console.log(`${data.name} esta nice`)

    }else {
        console.error(`'Ocurrio un error en la peticion ${error}`);
    }
});

}
pedirPokemon('ditto')