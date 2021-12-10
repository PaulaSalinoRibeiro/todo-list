let paragraph = document.createElement('p');
let header = document.getElementById('header');
header.appendChild(paragraph);
paragraph.id = 'funcionamento';
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

let input = document.createElement('input');
header.appendChild(input);
input.type = 'text';
input.id = 'texto-tarefa';


let orderList = document.createElement('ol');
header.appendChild(orderList);
orderList.id = 'lista-tarefas';

let button = document.createElement('button');
header.appendChild(button);
button.id = 'criar-tarefas';
button.innerText = 'Adicionar';

button.addEventListener('click', addItem);

function addItem(){
    let button = document.getElementById('texto-tarefa').value; // https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
    let li = document.createElement('li');
    orderList.appendChild(li);
    li.innerText = button;
}
