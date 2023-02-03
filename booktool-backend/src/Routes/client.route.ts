import { Router } from 'express';
import ClientController from '../Controllers/client.controller';
import { Routes } from '../Types/route.interface';

class ClientRoute implements Routes {
  public path = '/client';
  public router = Router();
  public clientController = new ClientController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.clientController.getClients);
    this.router.get(`${this.path}/:id`, this.clientController.getClient);
    this.router.put(`${this.path}/:id`, this.clientController.updateClient);
    this.router.delete(`${this.path}/:id`, this.clientController.deleteClient);
    this.router.post(`${this.path}`, this.clientController.createClient);
  }
}

export default ClientRoute;
