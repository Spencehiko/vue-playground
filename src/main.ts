import { createApp } from 'vue'
import App from './App.vue';
import { createPinia } from 'pinia';
import { router } from './router.ts';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import './assets/styles/index.css';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
