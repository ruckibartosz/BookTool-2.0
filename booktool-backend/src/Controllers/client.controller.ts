import { Client } from '../Types/client.interface';
import { NextFunction, Request, Response } from 'express';
import ClientService from '../Services/client.service';
import { SortOrder } from 'mongoose';
export default class ClientController {
  public clientService = new ClientService();

  public getClients = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sortBy: string = String(req.query.sortBy);
      const sortOrder: SortOrder = req.query.sortOrder as SortOrder;
      const findAllClientsData: Client[] = await this.clientService.findAllClients(sortBy, sortOrder);

      res.status(200).json({ data: findAllClientsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findClientData = await this.clientService.findOneClient(req.params.id);

      res.status(200).json({ data: findClientData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public updateClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const clientId: string = req.params.id;
      const clientData: Client = req.body;
      const updatedApartmentData = await this.clientService.updateClient(clientData, clientId);

      res.status(200).json({ data: updatedApartmentData, message: 'updateOne' });
    } catch (error) {
      next(error);
    }
  };

  public deleteClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const clientId: string = req.params.id;
      const deletedClientData = await this.clientService.deleteClient(clientId);

      res.status(200).json({ data: deletedClientData, message: 'deleteOne' });
    } catch (error) {
      next(error);
    }
  };

  public createClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdClientData: Client = await this.clientService.createClient(req.body);

      res.status(200).json({ data: createdClientData, message: 'create' });
    } catch (error) {
      next(error);
    }
  };
}
