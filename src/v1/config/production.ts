import { IConfig } from '../interfaces/IConfig';
import env from './env';

const productionConfig: IConfig = {
	appHost: env.APP_HOST,
	appPort: parseInt(env.APP_PORT, 10),
	databaseConnection: env.DATABASE_CONNECTION,
	jwtSecret: env.JWT_SECRET,
	jwtExpiration: env.JWT_EXPIRATION,
	jwtRefreshExpiration: env.JWT_REFRESH_TOKEN,
	gmailClientId: env.CLIENT_ID,
	gmailClientSecret: env.CLIENT_SECRET,
	gmailRedirectUri: env.REDIRECT_URI,
	gmailRefreshToken: env.REFRESH_TOKEN,
};

export default productionConfig;
