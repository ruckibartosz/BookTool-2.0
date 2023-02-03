import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import { connect, set } from 'mongoose';
import ApartmentRoute from './Routes/apartment.route';
import ClientRoute from './Routes/client.route';
import ReservationRoute from './Routes/reservation.route';
import { NODE_ENV, PORT, ORIGIN, CREDENTIALS, MORGAN_LOG_FORMAT, DB_CONNECT_URL } from './Config';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor() {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.connectDatabase();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(`======= ENV: ${this.env} =======`);
      console.log(`App listening on the port ${this.port} 🚀`);
      console.log(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(morgan(MORGAN_LOG_FORMAT));
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeRoutes() {
    this.app.use('/', new ApartmentRoute().router);
    this.app.use('/', new ClientRoute().router);
    this.app.use('/', new ReservationRoute().router);
  }

  private connectDatabase() {
    set('strictQuery', false);
    connect(DB_CONNECT_URL)
      .then(() => {
        console.log(`=================================`);
        console.log(`SUCCESSFULLY CONNECTED WITH DATABASE ✅`);
        console.log(`=================================`);
      })
      .catch(() => {
        console.log(`=================================`);
        console.log(`CONNECTED WITH DATABASE FAILED ❌`);
        console.log(`=================================`);
      });
  }
}

export default App;
