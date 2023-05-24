import Todo from "../services/todo.js";
import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";

const renderTodos = async () => {
    const todos = await Todo.getAll();
    const todosEl = document.querySelector('.todos');

    todosEl.replaceChildren();

    todos.data.map((todo) => {
        const container = document.createElement('div');
        container.style = `display:flex; 
            justify-content:space-between;
            align-items: center;
            column-gap: 3vh;
            padding: 3vh;
            margin-bottom: 2vh;
            border: 1px solid black;
            border-radius: 2vh
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

            const { ok } = await Todo.update(values);

            if (ok) {
                if (completed.checked) {
                    description.style.textDecoration = 'line-through';
                } else {
                    description.style.textDecoration = 'none';
                }

                await renderTodos();
            }
        }

        deleteButton.onclick = async () => {
            const { ok } = await Todo.delete(todo.id);
            if (ok) {
                await renderTodos();
            }
        }

        container.appendChild(completed);
        container.appendChild(description);
        container.appendChild(deleteButton);
        todosEl.appendChild(container);
    });
}

const init = async () => {
    const { ok: isLogged } = await Auth.me()

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

        const { ok } = await Todo.create(todoInputValue);

        if (ok) {
            await renderTodos();
        }
    }

    await renderTodos();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}
