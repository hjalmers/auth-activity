import App from './App.svelte';


const app = new App({
	target: document.getElementById('sebAuthActivity'),
	props: {
		apiPath: 'https://private-b39b24-authactivity.apiary-mock.com'
	}
});

export default app;
