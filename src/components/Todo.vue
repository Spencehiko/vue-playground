<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodo } from '../stores/todo'

const store = useTodo();
const { allTodos, completedTodos } = storeToRefs(store);
const { addTodo, removeTodo, clearCompleted } = store;
const newTodo = ref('');
</script>

<template>
    <div id="todo" class="bg-gray-300 py-10 overflow-auto max-h-100-30px">
        <h3 class="mt-5">TODO LIST</h3>
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
                    border border-gray-300
                    w-1/2
                    text-gray-900
                "
                v-if="allTodos.length > 0"
            >
                <li
                    v-for="todo in allTodos"
                    :key="todo.id"
                    class="px-10 py-5 border-gray-300 w-full flex"
                    :class="{ 'border-b': todo.id < allTodos.length - 1 }"
                >
                    <div
                        class="
                            flex
                            items-center
                            justify-center
                            w-16
                            my-auto
                            mr-10
                        "
                    >
                        <label
                            :id="'completedToggle' + todo.id"
                            class="flex items-center cursor-pointer"
                        >
                            <div class="relative">
                                <input
                                    type="checkbox"
                                    :id="'completedToggle' + todo.id"
                                    class="sr-only"
                                    v-model="todo.completed"
                                />
                                <div
                                    class="
                                        block
                                        bg-red-700
                                        w-14
                                        h-8
                                        rounded-full
                                    "
                                    :class="{
                                        'bg-green-700': todo.completed,
                                    }"
                                ></div>
                                <div
                                    class="
                                        dot
                                        absolute
                                        left-1
                                        top-1
                                        bg-white
                                        w-6
                                        h-6
                                        rounded-full
                                        transition
                                        transform
                                        duration-300
                                    "
                                    :class="{
                                        'translate-x-full': todo.completed,
                                    }"
                                ></div>
                            </div>
                        </label>
                    </div>
                    <span v-text="todo.title" class="my-auto" />
                    <button
                        @click="removeTodo(todo.id)"
                        class="
                            ml-auto
                            p-2
                            text-right
                            border-2
                            border-gray-300
                            rounded-lg
                            duration-300
                            hover:border-white hover:bg-red-700 hover:text-white
                        "
                    >
                        X
                    </button>
                </li>
            </ul>
            <p v-if="allTodos.length === 0" class="mt-10 italic">
                ~ There is no todos yet ~
            </p>
        </div>
        <button
            v-if="completedTodos.length"
            class="
                mt-5
                border
                p-3
                border-green-700
                rounded-full
                bg-green-700
                text-white
                hover:bg-white hover:text-green-700
                duration-300
            "
            @click="clearCompleted"
        >
            Clear Completed
        </button>
    </div>
</template>
