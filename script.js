
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
button.id = 'criar-tarefa';
button.innerText = 'Adicionar';

button.addEventListener('click', addItem);

function addItem(event){
    let button = document.getElementById('texto-tarefa'); 
    let li = document.createElement('li');
    orderList.appendChild(li);
    li.innerText = button.value; // ref.: https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
    button.value = '';  // ref.: https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission
}

orderList.addEventListener('click', selected);

function selected(event){
    let itens = document.querySelectorAll('li');
    for(let index = 0; index < itens.length; index += 1){
        if(itens[index].style.backgroundColor === 'rgb(128, 128, 128)'){
            itens[index].style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

orderList.addEventListener('dblclick', completedItem);

function completedItem(event){ 
    if(event.target.className === 'completed'){   // Lógica da regra de negocio desenvolvida em conjunto com Emerson Alves T-19C
        event.target.className = '';
    }else{
        event.target.className ='completed';
    }
}

let clearButton = document.createElement('button');
header.appendChild(clearButton); 
clearButton.id = 'apaga-tudo';
clearButton.innerText = 'Apaga';

clearButton.addEventListener('click', clearList); 

function clearList(){
    let itens = document.querySelectorAll('li');
    for(let index = 0; index < itens.length; index += 1){  
        orderList.removeChild(itens[index])
    } 
} 

let fineshButton = document.createElement('button');
header.appendChild(fineshButton);
fineshButton.innerText = 'Remove Finalizado';
fineshButton.id = 'remover-finalizados';

fineshButton.addEventListener('click', removeItem)

function removeItem(event){
    let itens = document.querySelectorAll('li');
    for(let index = 0; index < itens.length; index += 1){
        if(itens[index].className === 'completed'){
            orderList.removeChild(itens[index]);
        }
    }
}

let saveButton = document.createElement('button');
header.appendChild(saveButton);
saveButton.id = 'salvar-tarefas';
saveButton.innerText = 'Salvar';

saveButton.addEventListener('click', save);

function save(){
    let list = document.querySelector('#lista-tarefas');
    let itensSave = localStorage.setItem('list', JSON.stringify(list.innerHTML));
     
}

 function saveItens(){
    let savedItens = JSON.parse(localStorage.getItem('list'));
    //console.log(savedItens);
    orderList.innerHTML = savedItens;
}  

window.onload = function(){
    saveItens() 
}   

let buttonSelected = document.createElement('button');
header.appendChild(buttonSelected);
buttonSelected.id = 'remover-selecionado';
buttonSelected.innerText = 'Remover Selecionado';

buttonSelected.addEventListener('click', removeItemSelected);

function removeItemSelected() {
    let itens = document.querySelectorAll('li');
    for(let index = 0; index < itens.length; index += 1){
        if(itens[index].style.backgroundColor === 'rgb(128, 128, 128)'){
            orderList.removeChild(itens[index]);
        }
    }
}

let upButton = document.createElement('button');
upButton.id = 'mover-cima'
upButton.innerHTML = '&#8593;'
upButton.style.fontSize = '18px'
header.appendChild(upButton)

upButton.addEventListener('click', moveUp);


let donwButton = document.createElement('button');
donwButton.id = 'mover-baixo'
donwButton.innerHTML = '&#8595;'
donwButton.style.fontSize = '18px'
header.appendChild(donwButton)

donwButton.addEventListener('click', moveDonw); 

function moveUp() {
    let itensList = document.querySelectorAll('li');
    let itens = [...itensList];
    for(let i = 0; i < itens.length; i += 1){
         if(itens[i].style.backgroundColor === 'rgb(128, 128, 128)' &&  i !== 0){
            let move = itens[i];
            itens[i] = itens[i - 1];
            itens[i - 1] = move;
        } 
    }
    orderList.innerHTML = '';
    for(let i = 0; i < itens.length; i += 1){
        orderList.appendChild(itens[i]);
    }
}

 function moveDonw() {
    let itensList = document.querySelectorAll('li');
    let itens = [...itensList];
    for(let i = itens.length - 1; i >= 0; i -= 1){
        if(itens[i].style.backgroundColor === 'rgb(128, 128, 128)' && i !== (itens.length - 1)){
            let move = itens[i];
            itens[i] = itens[i + 1];
            itens[i + 1] = move;
        }
        // console.log(itens);
    }
    orderList.innerHTML = '';
    for(let i = 0; i < itens.length; i += 1){
        orderList.appendChild(itens[i]);
        // console.log(itens[i]);
    }
};

