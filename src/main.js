import App from './App.html';
import Routes from './routes';

const app = new App({
	target: document.body,
	data: {
		name: 'TEST'
	}
});
window.Routes = new Routes();

export default app;