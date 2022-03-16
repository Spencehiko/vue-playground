<script setup lang='ts'>
</script>

<template>
    <div class="text-center">
        <router-link to="/">Home </router-link>|
        <router-link to="/todo">Todo </router-link>|
        <router-link to="/shopping">Shopping </router-link>|
        <router-link to="/news">News </router-link>
    </div>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
}
</style>
