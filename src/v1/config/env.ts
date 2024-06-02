import dotenv from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env específico para o ambiente atual
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const envConfig = {
	APP_HOST: process.env.APP_HOST || 'localhost',
	APP_PORT: process.env.APP_PORT || '3030', // Aqui garantimos que APP_PORT seja uma string
	DATABASE_CONNECTION: process.env.DATABASE_CONNECTION || '',
	JWT_SECRET: process.env.JWT_SECRET || '',
	JWT_EXPIRATION: process.env.JWT_EXPIRATION || '3600',
	JWT_REFRESH_TOKEN: process.env.JWT_REFRESH_TOKEN || '7200',
	CLIENT_ID: process.env.CLIENT_ID || '',
	CLIENT_SECRET: process.env.CLIENT_SECRET || '',
	REDIRECT_URI: process.env.REDIRECT_URI || '',
	REFRESH_TOKEN: process.env.REFRESH_TOKEN || '',
};

export default envConfig;
