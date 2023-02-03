import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const DB_CONNECT_URL = `mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASSWORD}@${process.env.DB_DATABASE}.mongodb.net/?retryWrites=true&w=majority`;
export const MORGAN_LOG_FORMAT = ':method :url :status :response-time ms - :res[content-length]';
export const CREDENTIALS = process.env.CREDENTIALS === 'true';

export const { NODE_ENV, PORT, DB_HOST, DB_PASSWORD, DB_PORT, DB_DATABASE, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
