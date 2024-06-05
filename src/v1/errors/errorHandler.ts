import { Request, Response, NextFunction } from 'express';
import { AppError, ErrorType } from './AppError';
import { ErrorTranslationService } from '../services/ErrorService/ErrorTranslationService';

const errorTranslationService: ErrorTranslationService = new ErrorTranslationService();

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.getStatusCode()).json({
    status: 'error',
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendErrorProd = (err: AppError, res: Response) => {
  if (err.getIsOperational()) {
    res.status(err.getStatusCode()).json({
      status: 'error',
      message: errorTranslationService.getMessage(err.getType()),
    });
  } else {
    console.error('ERROR:', err);

    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

const handleValidationError = (err: AppError, res: Response) => {
  res.status(err.getStatusCode()).json({
    status: 'fail',
    message: err.message,
  });
};

const handleProgrammingError = (err: AppError, res: Response) => {
  console.error('ERROR:', err);
  res.status(500).json({
    status: 'error',
    message: 'Something went very wrong!',
  });
};

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    switch (err.getType()) {
      case ErrorType.Validation:
        handleValidationError(err, res);
        break;
      case ErrorType.Programming:
        handleProgrammingError(err, res);
        break;
      default:
        sendErrorProd(err, res);
        break;
    }
  }
};
