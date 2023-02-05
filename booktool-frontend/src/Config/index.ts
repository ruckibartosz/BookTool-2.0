import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { NODE_ENV, API_URL, API_URL_APARTMENT, API_URL_CLIENT, API_URL_RESERVATION } = process.env;
