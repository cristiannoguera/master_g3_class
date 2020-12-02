// Hacer una funcion que haga una petición 
// (Ejemplo: peticionLibro("i robot");
// Buscar un libro y traer el o los autores del primer libro
// http://openlibrary.org/search.json?q=i+robot)


const request = require('request');
const buscarLibro = () => {
    request.get('http://openlibrary.org/search.json?q=i+robot', (error, response, body) => {
        if (response.statusCode === 200) {
            const data = JSON.parse(body);
            //console.log(JSON.parse(body));
            console.log(`El Autor se llama: ${data.docs[0].author_name}`);
            console.log(`Fecha de publicacion: ${data.docs[0].publish_date}`);
        }else {
            console.log(`'Ocurrio un error en la peticion ${error}`)
    }
});
}
buscarLibro()