import { validateEmail } from "../validators/EmailValidator";
import { configureLogger } from '../utils/logger';

const logger = configureLogger('error');

export class User {
	private name: string;
	private email: string;
	private password: string;

	constructor(name: string, email: string, password: string) {
		this.name = name;
		this.email = email;
		this.password = password;
	}

	getName(): string | undefined {
		return this.name;
	}

	getEmail(): string {
		return this.email;
	}

	getPassword(): string {
		return this.password;
	}

	setName(name: string): void {
		this.name = name;
	}

	async setEmail(email: string): Promise<void> {

		const validationError = await validateEmail(email);

		if(validationError){
			logger.error("Email Inválido: " + validationError[0].message);
			throw new Error('Email Inválido: ', validationError[0].message);
		}

		this.email = email;
	}

	setPassword(password: string): void {
		this.password = password;
	}
}
