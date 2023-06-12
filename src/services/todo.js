import TodoRepository from "../repository/todo.js";

class Todo {
    static async getAll() {
        return await TodoRepository.getAll();
    }

    static async create(todoText) {
        return await TodoRepository.create(todoText);
    }

    static async update(data) {
        return await TodoRepository.update(data);
    }

    static async delete(id) {
        return await TodoRepository.delete(id);
    }
}

export default Todo