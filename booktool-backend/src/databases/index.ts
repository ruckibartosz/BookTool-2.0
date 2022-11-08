import { DB_HOST, DB_PASSWORD, DB_DATABASE } from '@config';

export const dbConnection = {
  url: `mongodb+srv://${DB_HOST}:${DB_PASSWORD}@${DB_DATABASE}.mongodb.net/?retryWrites=true&w=majority`,
};
