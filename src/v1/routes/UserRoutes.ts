import { Router } from 'express';
import { CreateUserController } from '../controllers/UserController/CreateUserController';

class UserRoutes {
	private router: Router;
	private createUserController: CreateUserController;

	constructor() {
		this.router = Router();
		this.createUserController = new CreateUserController();
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.post(
			'/create',
			this.createUserController.handle.bind(this.createUserController),
		);
	}

	getRouter(): Router {
		return this.router;
	}
}

export default new UserRoutes().getRouter();
