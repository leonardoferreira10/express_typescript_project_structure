import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { Logger } from '../interfaces/ILogger';

export function configureLogger(logLevel: string): Logger {
  const fileTransport = new DailyRotateFile({
    filename: 'logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
  });

  const consoleTransport = new winston.transports.Console();

  const logger = winston.createLogger({
    transports: [
      fileTransport,
      consoleTransport,
    ],
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.simple()
    ),
    level: logLevel,
  });

  return logger;
}
