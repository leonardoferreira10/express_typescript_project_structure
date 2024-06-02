import { Request, Response } from 'express';
import { CreateUserService } from '../../services/UserService/CreateUserService';

export class CreateUserController {
	private createUserService: CreateUserService;

	constructor() {
		this.createUserService = new CreateUserService();
	}

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, email, password } = request.body;

		try {
			await this.createUserService.execute({
				name,
				email,
				password,
			});

			return response.status(201).send();
		} catch (error: any) {
			return response.status(400).json({
				message: error.message || 'Unexpected error.',
			});
		}
	}
}
