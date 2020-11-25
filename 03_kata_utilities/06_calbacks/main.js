const timer = (callback, time) => {
    for (let i = 0; i >time; i++) {
        if (i === time) {
            callback()
        }
    }
}
setTimeout(function () {
    console.log('Hola a todos')
} , 1000)
