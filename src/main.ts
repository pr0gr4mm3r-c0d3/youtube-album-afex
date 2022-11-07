import { createApp } from 'vue';
import App from './App.vue';
import { pinia, Toast } from '@/config';
import { handlerErrors } from './utils';
import '@/scss/main.scss';

const app = createApp(App);
app.config.errorHandler = (err) => {
	console.error(err);
	handlerErrors(err);
};
app.use(pinia).use(Toast).mount('#app');
