import { ErrorType } from './../errors/AppError';
import { AppError } from '../errors/AppError';
import { IUsersRepository } from '../interfaces/IUsersRepository';
import { User } from '../models/User';

export class UsersRepository implements IUsersRepository {
	private users: User[] = [];

	async findByEmail(email: string): Promise<User> {
		const user: any = this.users.find(
			(user: User) => user.getEmail() === email,
		);

		if(!user){
			 // Lança um erro se o usuário não for encontrado
			 throw new AppError('User not found', 404, ErrorType.Validation);
		}

		return user;
	}

	async save(user: User): Promise<void> {
		this.users.push(user);
	}
}
