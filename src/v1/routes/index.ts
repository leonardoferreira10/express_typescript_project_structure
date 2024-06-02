import { Router } from 'express';
import userRoutes from './UserRoutes';

class Routes {
	private router: Router;

	constructor() {
		this.router = Router();
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.use('/user', userRoutes);
	}

	getRouter(): Router {
		return this.router;
	}
}

export default new Routes().getRouter();
