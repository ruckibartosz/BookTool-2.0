import { Apartment } from '../Types/apartment.interface';
import { NextFunction, Request, Response } from 'express';
import ApartmentService from '../Services/apartment.service';

export default class ApartmentController {
  public apartmentService = new ApartmentService();

  public getApartments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllApartmentsData: Apartment[] = await this.apartmentService.findAllApartments();

      res.status(200).json({ data: findAllApartmentsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getApartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const apartmentId = req.params.id;
      const findApartmentData = await this.apartmentService.findOneApartment(apartmentId);

      res.status(200).json({ data: findApartmentData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public updateApartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const apartmentId: string = req.params.id;
      const apartmentData: Apartment = req.body;
      const updatedApartmentData = await this.apartmentService.updateApartment(apartmentData, apartmentId);

      res.status(200).json({ data: updatedApartmentData, message: 'updateOne' });
    } catch (error) {
      next(error);
    }
  };

  public deleteApartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const apartmentId: string = req.params.id;
      const deletedApartmentData = await this.apartmentService.deleteApartment(apartmentId);

      res.status(200).json({ data: deletedApartmentData, message: 'deleteOne' });
    } catch (error) {
      next(error);
    }
  };

  public createApartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const apartmentData = req.body;
      const createdApartmentData = await this.apartmentService.createApartment(apartmentData);

      res.status(200).json({ data: createdApartmentData, message: 'create' });
    } catch (error) {
      next(error);
    }
  };
}
