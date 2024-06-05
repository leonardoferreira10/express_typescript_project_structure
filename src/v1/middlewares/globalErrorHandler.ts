import { Request, Response, NextFunction } from 'express';

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({
    status: 'error',
    message: 'Something went very wrong!',
  });
};
