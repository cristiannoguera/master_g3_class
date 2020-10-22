var button = document.getElementById('button');
var button = document.getElementById('button');
var submit = document.getElementById('submit');
var form = document.getElementById('form');





submit.addEventListener('click', function (event) {
    console.log(event)
    event.preventDefault();
    console.log('hola')
})

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event)
}
)






// function conteo() {
//    console.log('hola')
// var button = document.getElementById('prueba');
//    button.innerHTML = "conteo de Clicks: " + event.detail;
// }

// var button = document.getElementById('button');

// // button.addEventListener('click', function () {
// //    console.log('Estoy dando click')
// // })

// button.addEventListener("click", function() {
//     console.log('estoy dando click')
// }