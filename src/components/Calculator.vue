<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCalculator } from '../stores/calculator'

const store = useCalculator();
const { ans } = storeToRefs(store);
const { calculate, addToNumber } = store;
const newTodo = ref('');
const buttons = ['C', 'π', '%', '⌫', '1/x', 'x²', '√x', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '+/-', 0, '.', '='];
const handleClick = (button: string | number) => {
    if (typeof button === 'number') {
        addToNumber(button);
    } else {
        if (button === 'C') {
            ans.value = 0;
        } else if (button === 'π') {
            ans.value = 3.142;
        } else if (button === '%') {
            ans.value = parseFloat((ans.value / 100).toFixed(3));
        } else if (button === '⌫') {
            console.log(ans.value.toString());
            ans.value = parseFloat(ans.value.toString().slice(0, -1));
        } else if (button === '1/x') {
            ans.value = parseFloat((1 / ans.value).toFixed(3));
        } else if (button === 'x²') {
            ans.value = ans.value * ans.value;
        } else if (button === '√x') {
            ans.value = parseFloat(Math.sqrt(ans.value).toFixed(3));
        } else if (button === '÷') {
            console.log('divide');
        } else if (button === 'x') {
            console.log('multiply');
        } else if (button === '-') {
            console.log('subtract');
        } else if (button === '+') {
            console.log('add');
        } else if (button === '+/-') {
            ans.value = -ans.value;
        } else if (button === '=') {
            calculate();
        } else if (button === '. ') {
            console.log('dot');
        }
    }
};
</script>

<template>
    <div
        id="calculator"
        class="
            bg-purple-300
            py-10
            overflow-auto
            max-h-100-30px
            text-center
            my-auto
        "
    >
        <h3 class="my-5">CALCULATOR</h3>
        <div class="w-3/5 bg-black p-6 mx-auto rounded-lg text-4xl">
            <div
                class="
                    bg-green-600
                    w-full
                    mb-5
                    text-right
                    p-3
                    text-black
                    font-mono
                "
            >
                {{ ans.toLocaleString("en-US", { maximumFractionDigits: 3 }) }}
            </div>
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
                        hover:bg-gray-200 hover:text-gray-900
                    "
                    :class="{
                        'bg-gray-500':
                            ((index + 1) % 4 === 0 || index < 7) &&
                            button !== '=' &&
                            button !== 'C',
                        'hover:bg-gray-400':
                            ((index + 1) % 4 === 0 || index < 7) &&
                            button !== '=' &&
                            button !== 'C',
                        'bg-red-500': button === 'C',
                        'hover:bg-red-400': button === 'C',
                        'bg-yellow-600': button === '=',
                        'hover:bg-yellow-500': button === '=',
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
