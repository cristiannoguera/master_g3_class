const getUserById = (id, callback) => {
    const user = {
        name: 'Cristian',
        id: id
    };
    console.log('function', callback)
    callback();
}


getUserById(1, () => {
    console.log('Hola mundo');
})