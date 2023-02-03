import BasicApiService from '../Services/basicApi.service';
import reservationModel from '../Models/reservation.model';
import { Reservation } from '../Types/reservation.interface';
import { NextFunction, Request, Response } from 'express';

export default class ReservationController {
  public basicApiService = new BasicApiService<Reservation>(reservationModel);

  public getReservations = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllReservationsData: Reservation[] = await this.basicApiService.findAllModels();
      
      res.status(200).json({ data: findAllReservationsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findReservationData: Reservation = await this.basicApiService.findModelById(req.params.id);

      res.status(200).json({ data: findReservationData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public updateReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservationId: string = req.params.id;
      const reservationData: Reservation = req.body;
      const updatedReservationData: Reservation = await this.basicApiService.updateModel(reservationId, reservationData);

      res.status(200).json({ data: updatedReservationData, message: 'updateOne' });
    } catch (error) {
      next(error);
    }
  };

  public deleteReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservationId: string = req.params.id;
      const deletedReservationData: Reservation = await this.basicApiService.deleteModel(reservationId);

      res.status(200).json({ data: deletedReservationData, message: 'deleteOne' });
    } catch (error) {
      next(error);
    }
  };

  public createReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdReservationData: Reservation = await this.basicApiService.createModel(req.body);

      res.status(200).json({ data: createdReservationData, message: 'create' });
    } catch (error) {
      next(error);
    }
  };
}
