import { Router } from 'express';
import ApartmentController from '../Controllers/apartment.controller';
import { Routes } from '../Types/route.interface';

class ApartmentRoute implements Routes {
  public path = '/apartment';
  public router = Router();
  public apartmentController = new ApartmentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.apartmentController.getApartments);
    this.router.get(`${this.path}/:id`, this.apartmentController.getApartment);
    this.router.put(`${this.path}/:id`, this.apartmentController.updateApartment);
    this.router.delete(`${this.path}/:id`, this.apartmentController.deleteApartment);
    this.router.post(`${this.path}`, this.apartmentController.createApartment);
  }
}

export default ApartmentRoute;
