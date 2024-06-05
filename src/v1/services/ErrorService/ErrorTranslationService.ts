import { ErrorType } from '../../errors/AppError';

export class ErrorTranslationService {
  public getMessage(errorType: ErrorType): string {
    switch (errorType) {
      case ErrorType.Validation:
        return 'Invalid data provided';
      case ErrorType.Operational:
        return 'An operational error occurred';
      case ErrorType.Programming:
        return 'A programming error occurred';
      default:
        return 'An unexpected error occurred';
    }
  }
}
