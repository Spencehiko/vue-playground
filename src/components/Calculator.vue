<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCalculator } from '../stores/calculator'

const store = useCalculator();
const { ans } = storeToRefs(store);
const { calculate, clear, add } = store;
const newTodo = ref('');
const buttons = ['C', 'x²', '√', '1/x', 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '+', '='];
const handleClick = (button: string | number) => {
    if (button === '=') {
        calculate();
    } else if (button === 'C') {
        clear();
    }
};
</script>

<template>
    <div
        id="calculator"
        class="bg-purple-300 py-10 overflow-auto max-h-100-30px text-center"
    >
        <h3 class="my-5">CALCULATOR</h3>
        <div class="w-3/4 bg-black p-6 mx-auto rounded-lg text-4xl">
            <div class="bg-green-600 w-full mb-5 text-right p-3 text-black font-mono">{{ ans }}</div>
            <div class="grid grid-cols-4 gap-4">
                <button
                    class="
                        bg-gray-300
                        text-gray-900
                        font-bold
                        py-2
                        px-4
                        rounded
                        w-full
                        focus:outline-none focus:bg-gray-200 focus:text-gray-900
                        hover:bg-gray-200 hover:text-gray-900
                    "
                    :class="{
                        'bg-red-500': button === 'C',
                        'bg-yellow-600': button === '=',
                    }"
                    v-for="(button, index) in buttons"
                    :key="index"
                    @click="handleClick(button)"
                    type="button"
                >
                    {{ button }}
                </button>
            </div>
        </div>
    </div>
</template>
