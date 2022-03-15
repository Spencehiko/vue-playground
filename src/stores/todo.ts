import { defineStore } from 'pinia';
import alertify from 'alertifyjs';
interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

export const useTodo = defineStore('useTodo', {
    state: () => ({
        todos: [] as TodoItem[],
    }),
    actions: {
        addTodo(title: string) {
            if (title.trim() === '') {
                alertify.error('Title cannot be empty!', 2);
                return;
            }
            this.todos.push({
                id: this.todos.length,
                title,
                completed: false,
            });
            alertify.success("Todo added", 2);
        },
        removeTodo(id: number) {
            alertify.confirm("Confirm", "Are you sure to delete this todo?", () => {
                this.todos = this.todos.filter((todo: TodoItem) => todo.id !== id);
                alertify.success("Todo removed", 2);
            }, () => { }).set('movable', false);
        },
        clearCompleted() {
            alertify.confirm("Confirm", "Are you sure to clear completed todos?", () => {
                this.todos = this.todos.filter((todo: TodoItem) => !todo.completed);
                alertify.success("Completed todos removed", 2);
            }, () => { }).set('movable', false);
        }
    },
    getters: {
        allTodos(): TodoItem[] {
            return this.todos;
        },
        completedTodos(): TodoItem[] {
            return this.todos.filter((todo: TodoItem) => todo.completed);
        },
    },
    persist: true,
});
