import { ICreateUserRequestDTO } from '../../interfaces/CreateUserDTO';
import { IUsersRepository } from '../../interfaces/IUsersRepository';
import { User } from '../../models/User';
import { UsersRepository } from '../../repositories/UsersRepository';

export class CreateUserService {
	private usersRepository: IUsersRepository;

	constructor() {
		this.usersRepository = new UsersRepository();
	}

	async execute(data: ICreateUserRequestDTO) {
		const userAlreadyExists = await this.usersRepository.findByEmail(
			data.email,
		);

		if (userAlreadyExists) {
			throw new Error('User already exists.');
		}

		const user = new User(data.name, data.email, data.password);

		await this.usersRepository.save(user);
	}
}
