<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useShopping } from '../stores/shopping';

const store = useShopping();
const { allItems } = storeToRefs(store);
const { addItem, removeItem, clearItems, incrementItem, decrementItem } = store;
const newItem = ref('');
</script>
<template>
    <div id="shopping" class="bg-green-100 py-10">
        <h3 class="mt-5">SHOPPING LIST</h3>
        <input
            v-model="newItem"
            @keyup.enter="
                addItem(newItem);
                newItem = '';
            "
            placeholder="What to buy? Write and press enter"
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
                v-if="allItems.length > 0"
            >
                <li
                    v-for="item in allItems"
                    :key="item.id"
                    class="px-10 py-5 border-gray-300 w-full flex"
                    :class="{ 'border-b': item.id < allItems.length - 1 }"
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
                        <button @click="decrementItem(item.id)">-</button>
                        <label
                            v-text="item.count"
                        />
                        <button @click="incrementItem(item.id)">+</button>
                    </div>
                    <div
                        class="
                            flex
                            items-center
                            justify-center
                            w-16
                            my-auto
                            mr-10
                        "
                    ></div>
                    <span v-text="item.title" class="my-auto"></span>
                    <button
                        @click="removeItem(item.id)"
                        class="
                            ml-auto
                            p-2
                            text-right
                            border-2 border-gray-300
                            rounded-lg
                            duration-300
                            hover:border-white hover:bg-red-700 hover:text-white
                        "
                    >
                        X
                    </button>
                </li>
            </ul>
            <p v-if="allItems.length === 0" class="mt-10 italic">
                ~ There is no items to buy yet ~
            </p>
        </div>
        <button
            v-if="allItems.length"
            class="
                mt-5
                border
                p-3
                border-red-700
                rounded-full
                bg-red-700
                text-white
                hover:bg-white hover:text-red-700
                duration-300
            "
            @click="clearItems"
        >
            Clear Items
        </button>
    </div>
</template>

<style>
</style>