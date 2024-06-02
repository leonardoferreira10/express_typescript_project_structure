import express from 'express';
import routes from './v1/routes';

class App {
	private app: express.Application;

	constructor() {
		this.app = express();
		this.config();
	}

	private config(): void {
		this.app.use(express.json());
		this.app.use('/api/v1', routes);
	}

	getApp(): express.Application {
		return this.app;
	}
}

export default new App().getApp();
