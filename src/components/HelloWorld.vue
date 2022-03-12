<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const props = defineProps({
    msg: {
        type: String,
        default: 'Welcome to Your Vue.js App'
    }
})

interface Book {
    title: string
    year?: number
}
const book: Book = reactive({ title: 'Vue 3 Guide' })
const count = ref(5)
const countDouble = computed<number>(() => count.value * 2)
</script>

<template>
    <h1>{{ props.msg }}</h1>
    <h1>{{ count }}</h1>
    <h1>{{ countDouble }}</h1>
    <input type="text" v-model="book.title" />
    <h1>{{ book }}</h1>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
