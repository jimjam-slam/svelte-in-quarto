import App from './App.svelte';
import Circles from './Circles.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;