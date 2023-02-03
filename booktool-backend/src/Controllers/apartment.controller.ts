import BasicApiService from '../Services/basicApi.service';
import apartmentModel from '../Models/apartments.model';
import { Apartment } from '../Types/apartment.interface';
import { NextFunction, Request, Response } from 'express';

export default class ApartmentController {
  public basicApiService = new BasicApiService<Apartment>(apartmentModel);

  public getApartments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllApartmentsData: Apartment[] = await this.basicApiService.findAllModels();

      res.status(200).json({ data: findAllApartmentsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getApartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findApartmentData: Apartment = await this.basicApiService.findModelById(req.params.id);

      res.status(200).json({ data: findApartmentData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public updateApartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const apartmentId: string = req.params.id;
      const apartmentData: Apartment = req.body;
      const updatedApartmentData: Apartment = await this.basicApiService.updateModel(apartmentId, apartmentData);

      res.status(200).json({ data: updatedApartmentData, message: 'updateOne' });
    } catch (error) {
      next(error);
    }
  };

  public deleteApartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const apartmentId: string = req.params.id;
      const deletedApartmentData: Apartment = await this.basicApiService.deleteModel(apartmentId);

      res.status(200).json({ data: deletedApartmentData, message: 'deleteOne' });
    } catch (error) {
      next(error);
    }
  };

  public createApartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdApartmentData: Apartment = await this.basicApiService.createModel(req.body);

      res.status(200).json({ data: createdApartmentData, message: 'create' });
    } catch (error) {
      next(error);
    }
  };
}
