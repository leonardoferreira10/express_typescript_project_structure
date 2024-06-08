import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './v1/routes';
import { errorHandler } from "./v1/middlewares/errorHandler";
import { globalErrorHandler } from './v1/middlewares/globalErrorHandler';

class App {
	private app: express.Application;

	constructor() {
		this.app = express();
		this.config();
	}

	private config(): void {
		// Adiciona Helmet para segurança
		this.app.use(helmet());

		// Adiciona CORS para permitir requisições de diferentes origens
		this.app.use(cors());

		// Adiciona Morgan para logging das requisições
		this.app.use(morgan('dev'));
		this.app.use(express.json());
		this.app.use('/api/v1', routes);
		// Middleware de tratamento de erros específico para rotas
		this.app.use(errorHandler);
		// Middleware de tratamento de erros global
		this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  		globalErrorHandler(err, req, res, next);
		});
	}

	getApp(): express.Application {
		return this.app;
	}
}

export default new App().getApp();
