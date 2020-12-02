// Hacer una funcion que haga una petición 
// (Ejemplo: peticionLibro("i robot");
// Buscar un libro y traer el o los autores del primer libro
// http://openlibrary.org/search.json?q=i+robot)

const request = require('request');

const buscarLibro = (libro) => {

    request.get(`http://openlibrary.org/${libro}`, (error, response, body) => {
        if (response.statusCode === 200) {
            const data = JSON.parse(body)
            console.log(data);
            console.log(`${data.tittle}`)
        }else {
            console.error(`'Ocurrio un error en la peticion ${error}`);
    }
});
}
buscarLibro('i robot')
