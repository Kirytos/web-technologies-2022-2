import Todo from "../services/todo.js";
import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";

const renderTodo = (todosEl, todo) => {
    const container = document.createElement('div');
    container.id = `${todo.id}`
    container.style = `display:flex; 
        justify-content:space-between;
        align-items: center;
        column-gap: 3vh;
        padding: 3vh;
        margin-bottom: 2vh;
        border-bottom: 0.1vh solid black;
    `

    const completed = document.createElement('input');
    completed.style.width = "4vh"
    completed.style.aspectRatio = "1/1"
    completed.checked = todo.completed === "true";
    completed.type = 'checkbox';

    const description = document.createElement('p');
    description.style.textDecoration = todo.completed === "true" && "line-through";
    description.style.wordBreak = "break-all";
    description.style.width = "80%";
    description.innerHTML = todo.description;

    const deleteButton = document.createElement('span');
    deleteButton.style.cursor = "pointer";
    deleteButton.style.fontSize = "5vh"
    deleteButton.innerText = "⌫";

    completed.onchange = async (e) => {
        const values = {
            id: todo.id,
            completed: e.target.checked
        };

        const {ok, data} = await Todo.update(values);

        if (ok) {
            if (completed.checked) {
                description.style.textDecoration = 'line-through';
            } else {
                description.style.textDecoration = 'none';
            }
        }
    }

    deleteButton.onclick = async () => {
        const { ok } = await Todo.delete(todo.id);
        if (ok) {
            removeTodo(todo.id)
        }
    }

    container.appendChild(completed);
    container.appendChild(description);
    container.appendChild(deleteButton);
    todosEl.appendChild(container);
}

const removeTodo = (todoId) => {
    const todo = document.getElementById(`${todoId}`)

    const parent = todo.parentNode
    
    parent.removeChild(todo)
}

const renderTodos = async () => {
    const todos = await Todo.getAll();
    const todosEl = document.querySelector('.todos');

    todosEl.replaceChildren();

    todos.data.map((todo) => {
        renderTodo(todosEl, todo);
    });
}

const init = async () => {
    const { ok: isLogged } = await Auth.me()
    const todosEl = document.querySelector('.todos');

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }

    let todoInputValue = "";

    const addTodoInput = document.querySelector('.todo-form_input');
    const addTodoButton = document.querySelector('.todo-form_button');

    addTodoInput.onchange = (e) => {
        todoInputValue = e.target.value;
    }

    addTodoButton.onclick = async (e) => {
        e.preventDefault()

        const { ok, data } = await Todo.create(todoInputValue);

        if (ok) {
            renderTodo(todosEl, data);
        }
    }

    await renderTodos();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}
