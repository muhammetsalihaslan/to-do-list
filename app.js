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
        ul.innerHTML += ` <li class="task">${todoInput.value} <button class="remove"><i class="fa-solid fa-trash"></i></button></li>`;
        todoInput.value = '';
        
    }
};

todoInput.addEventListener('keydown', (event) => {
    if(event.code === 'Enter'){
        addBtn.onclick();
    }
});


ul.onclick = function(e){
    if(e.target.classList.contains('fa-solid fa-trash')){
        e.target.parentElement.remove();
    }
}