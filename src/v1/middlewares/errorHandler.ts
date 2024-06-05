import { Request, Response, NextFunction } from 'express';
import { errorHandler as functionalErrorHandler } from '../errors/errorHandler';
import { AppError } from '../errors/AppError';

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  functionalErrorHandler(err, req, res, next);
};
