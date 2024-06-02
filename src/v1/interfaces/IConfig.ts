export interface IConfig {
	appHost: string;
	appPort: number;
	databaseConnection: string;
	jwtSecret: string;
	jwtExpiration: string;
	jwtRefreshExpiration: string;
	gmailClientId: string;
	gmailClientSecret: string;
	gmailRedirectUri: string;
	gmailRefreshToken: string;
}
