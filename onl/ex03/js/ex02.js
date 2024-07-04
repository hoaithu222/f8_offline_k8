document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newTodo = todoInput.value.trim();
        if (newTodo) {
            addTodoElement(newTodo);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete')) {
            const li = event.target.parentElement;
            li.remove();
        } else if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });

    function addTodoElement(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
