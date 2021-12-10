let paragraph = document.createElement('p');
let header = document.getElementById('header');
header.appendChild(paragraph);
paragraph.id = 'funcionamento';
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

let input = document.createElement('input');
header.appendChild(input);
input.type = 'text';
input.id = 'texto-tarefa';