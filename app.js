///***********definition af every element of html */

const todoInput = document.querySelector(".todo");
const addBtn = document.querySelector(".add");

const toDoList = document.querySelector("#todo-part");

const ul = document.createElement("ul");
toDoList.appendChild(ul);

///********reaction of html part ****/

addBtn.onclick = function() {
    if(!todoInput.value){
        alert("Please add a task");
    } else {
        ul.innerHTML += ` <li>${todoInput.value}</li>
        <button class="remove"><i class="fa-solid fa-trash"></i></button>`;
        todoInput.value = '';
        
    }
};

todoInput.addEventListener('keydown', (event) => {
    if(event.code === 'Enter'){
        addBtn.onclick();
    }
});