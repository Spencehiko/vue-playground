<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodo } from '../stores/todo'

const store = useTodo();
const { allTodos, activeTodos, completedTodos } = storeToRefs(store);
const { addTodo, removeTodo, clearCompleted } = store;
const newTodo = ref('');
</script>

<template>
    <div id="todo">
        <input v-model="newTodo" @keyup.enter="addTodo(newTodo)" placeholder="What needs to be done?" />
        <ul>
            <li v-for="todo in activeTodos" :key="todo.id">
                <span v-text="todo.title"></span>
                <button @click="removeTodo(todo.id)">X</button>
            </li>
        </ul>
        <p v-if="completedTodos.length">
            <button @click="clearCompleted">Clear completed</button>
        </p>
    </div>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
