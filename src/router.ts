import { createWebHistory, createRouter } from "vue-router";
import Todo from "./components/Todo.vue";
import Shopping from "./components/Shopping.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Todo
        },
        {
            path: "/todo",
            component: Todo
        },
        {
            path: "/shopping",
            component: Shopping
        }
    ]
})

export { router };