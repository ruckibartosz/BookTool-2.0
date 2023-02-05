import { Reservation } from '../Types/reservation.interface';
import { NextFunction, Request, Response } from 'express';
import ReservationService from '../Services/reservation.service';
import { SortOrder } from 'mongoose';

export default class ReservationController {
  public reservationService = new ReservationService();

  public getReservations = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sortBy: string = String(req.query.sortBy);
      const sortOrder: SortOrder = req.query.sortOrder as SortOrder;
      const findAllReservationsData = await this.reservationService.findAllReservations(sortBy, sortOrder);

      res.status(200).json({ data: findAllReservationsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findReservationData = await this.reservationService.findOneReservation(req.params.id);

      res.status(200).json({ data: findReservationData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public updateReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservationId: string = req.params.id;
      const reservationData: Reservation = req.body;
      const updatedReservationData = await this.reservationService.updateReservation(reservationData, reservationId);

      res.status(200).json({ data: updatedReservationData, message: 'updateOne' });
    } catch (error) {
      next(error);
    }
  };

  public deleteReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservationId: string = req.params.id;
      const deletedReservationData = await this.reservationService.deleteReservation(reservationId);

      res.status(200).json({ data: deletedReservationData, message: 'deleteOne' });
    } catch (error) {
      next(error);
    }
  };

  public createReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdReservationData = await this.reservationService.createReservation(req.body);

      res.status(200).json({ data: createdReservationData, message: 'create' });
    } catch (error) {
      next(error);
    }
  };
}
