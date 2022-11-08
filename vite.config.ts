import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
export default defineConfig({
	test: {
		// enable jest-like global test APIs
		globals: true,
		// simulate DOM with happy-dom
		// (requires installing happy-dom as a peer dependency)
		environment: 'happy-dom',
	},
	root: '.', //Define the root
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@test': path.resolve(__dirname, './test'),
		},
	},
	plugins: [vue({ include: [/\.vue$/] }), Components({ dts: true })],
});
