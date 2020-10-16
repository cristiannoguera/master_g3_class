
var title = document.getElementById('title');

title.textContent = 'Hola a todos'
console.log(title);

var paragraph = document.querySelector('.paragraph:nth-Child(2)');

console.log(paragraph);

var prueba = document.querySelector('p');
console.log(prueba); 

var paragraphs = document.querySelectorAll('.paragraph');

paragraphs[1].style.color = 'red';
paragraphs[2].style.color = 'red';

console.log(paragraphs[2]);

var paragraphsArray = Array.from(paragraphs);
paragraphsArray.push(1);
console.log(paragraphsArray);
