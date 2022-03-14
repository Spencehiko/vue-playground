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
        <input
            v-model="newTodo"
            @keyup.enter="
                addTodo(newTodo);
                newTodo = '';
            "
            placeholder="What to do? Write and press enter"
            type="text"
            maxlength="50"
            class="
                form-control
                block
                w-3/4
                px-3
                py-1.5
                text-center
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                mx-auto
                mt-5
                focus:text-gray-700
                focus:bg-white
                focus:border-green-600
                focus:outline-none
            "
        />
        <div class="flex justify-center">
            <ul
                class="
                    mt-10
                    bg-white
                    rounded-lg
                    border border-gray-200
                    w-1/2
                    text-gray-900
                "
            >
                <li
                    v-for="todo in activeTodos"
                    :key="todo.id"
                    class="px-10 py-5 border-b border-gray-200 w-full flex"
                >
                    <span v-text="todo.title" class="my-auto"></span>
                    <button
                        @click="removeTodo(todo.id)"
                        class="
                            ml-auto
                            p-2
                            text-right 
                            border-l-fuchsia-800 border-2
                            rounded-lg
                            duration-300
                            hover:border-white
                            hover:bg-red-400
                            hover:text-white
                        "
                    >
                        X
                    </button>
                </li>
            </ul>
            <p v-if="completedTodos.length">
                <button @click="clearCompleted">Clear completed</button>
            </p>
        </div>
    </div>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
