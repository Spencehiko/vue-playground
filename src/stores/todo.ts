import { defineStore } from 'pinia';

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
            this.todos.push({
                id: this.todos.length,
                title,
                completed: false,
            });
        },
        removeTodo(id: number) {
            this.todos = this.todos.filter((todo: TodoItem) => todo.id !== id);
        },
        clearCompleted() {
            this.todos = this.todos.filter((todo: TodoItem) => !todo.completed);
        }
    },
    getters: {
        allTodos(): TodoItem[] {
            return this.todos;
        },
        activeTodos(): TodoItem[] {
            return this.todos.filter((todo: TodoItem) => !todo.completed);
        },
        completedTodos(): TodoItem[] {
            return this.todos.filter((todo: TodoItem) => todo.completed);
        },
    },
    persist: true,
});
