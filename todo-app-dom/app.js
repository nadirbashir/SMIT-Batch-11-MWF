

function addTodo () {
    var todoInp = document.getElementById('todo');
    var list = document.getElementById('todo-list');

    if(!todoInp.value){
       alert("Please Enter Todo")
        return 
    }
    var newTodo = document.createElement('div');
    var todoText = document.createElement('p');
    todoText.innerHTML = todoInp.value;
    newTodo.append(todoText);

    newTodo.className = "todo-item";

    var editButton = document.createElement('button');
    var deleteBtn = document.createElement('button');

    editButton.innerHTML = "Edit";
    editButton.setAttribute("onclick", "editTodo(this)");
    newTodo.append(editButton);

    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");
    newTodo.append(deleteBtn);

    list.append(newTodo);
    todoInp.value = ""
}

function deleteTodo (deleteBtn) {
    deleteBtn.parentElement.remove();
}

function editTodo (editBtn) {
    
    var textEle = editBtn.previousElementSibling;

    var editInput = document.createElement('input');
    editInput.setAttribute("type", "text");
    editInput.value = textEle.innerText;

    textEle.className += " hide"

    editBtn.parentElement.prepend(editInput);
    

    
}