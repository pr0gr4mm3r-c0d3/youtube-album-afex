import { createApp } from 'vue';
import { pinia } from '../src/config';
export const withSetup = (composable: () => any) => {
	let result;
	const app = createApp({
		setup() {
			result = composable();
			// suppress missing template warning
			return () => {};
		},
	});
	app.use(pinia);
	app.mount(document.createElement('div'));
	// return the result and the app instance
	// for testing provide / unmount
	return [result, app];
};
