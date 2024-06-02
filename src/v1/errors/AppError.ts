export enum ErrorType {
  Operational = 'Operational',
  Programming = 'Programming',
  Validation = 'Validation',
}

export class AppError extends Error {
  private readonly statusCode: number;
  private readonly type: ErrorType;
  private readonly isOperational: boolean;

  public constructor(message: string, statusCode: number, type: ErrorType = ErrorType.Operational, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }

  public getStatusCode(): number {
    return this.statusCode;
  }

  public getIsOperational(): boolean {
    return this.isOperational;
  }

  public getType(): ErrorType {
    return this.type;
  }
}
