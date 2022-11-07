import { createApp } from 'vue';
import App from './App.vue';
import { pinia, Toast } from '@/config';
import '@/scss/main.scss';
const app = createApp(App);

app.use(pinia).use(Toast).mount('#app');
