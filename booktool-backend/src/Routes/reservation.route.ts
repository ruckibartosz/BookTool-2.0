import { Router } from 'express';
import ReservationController from '../Controllers/reservation.controller';
import { Routes } from '../Types/route.interface';

class ReservationRoute implements Routes {
  public path = '/reservation';
  public router = Router();
  public reservationController = new ReservationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.reservationController.getReservations);
    this.router.get(`${this.path}/:id`, this.reservationController.getReservation);
    this.router.put(`${this.path}/:id`, this.reservationController.updateReservation);
    this.router.delete(`${this.path}/:id`, this.reservationController.deleteReservation);
    this.router.post(`${this.path}`, this.reservationController.createReservation);
  }
}

export default ReservationRoute;
