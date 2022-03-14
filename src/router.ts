import { createWebHistory, createRouter } from "vue-router";
import Todo from "./components/Todo.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/todo",
            component: Todo
        }
    ]
})

export { router };