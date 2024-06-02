import { IUsersRepository } from '../interfaces/IUsersRepository';
import { User } from '../models/User';

export class UsersRepository implements IUsersRepository {
	private users: User[] = [];

	async findByEmail(email: string): Promise<User> {
		const user: any = this.users.find(
			(user: User) => user.getEmail() === email,
		);

		return user;
	}

	async save(user: User): Promise<void> {
		this.users.push(user);
	}
}
