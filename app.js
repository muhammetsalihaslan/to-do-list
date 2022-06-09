const todoInput = document.querySelector('.todo');
const addBtn = document.getElementById('add');

const todoSection = document.querySelector('#todo-section');

const ul = document.createElement('ul');
todoSection.appendChild(ul);

addBtn.onclick = function () {
    if(!todoInput.value){
        alert('you have not entered yet')
    } else {
        ul.innerHTML += `<li>${todoInput.value}</li>`;
        todoInput.value = '';
    }
}