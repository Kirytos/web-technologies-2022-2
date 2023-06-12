import api from "../services/api.js";

const TodoRepository = {
    async getAll() {
        return await api(`/todo`);
    },

    async create(todoText) {
        return await api('/todo', {
            method: 'POST',
            body: JSON.stringify({ description: todoText })
        });
    },

    async update(data) {
        return await api(`/todo/${data.id}`, {
            method: 'PUT',
            body: JSON.stringify({ completed: `${data.completed}` })
        });
    },

    async delete(id) {
        return await api(`/todo/${id}`, {
            method: 'DELETE'
        });
    }
}

export default TodoRepository