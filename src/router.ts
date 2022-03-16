import { createWebHistory, createRouter } from "vue-router";
import Todo from "./components/Todo.vue";
import Shopping from "./components/Shopping.vue";
import News from "./components/News.vue";

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
        },
        {
            path: "/news",
            component: News
        }
    ]
})

export { router };