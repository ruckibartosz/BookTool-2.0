import BasicApiService from '../Services/basicApi.service';
import clientModel from '../Models/client.model';
import { Client } from '../Types/client.interface';
import { NextFunction, Request, Response } from 'express';

export default class ClientController {
  public basicApiService = new BasicApiService<Client>(clientModel);

  public getClients = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllClientsData: Client[] = await this.basicApiService.findAllModels();

      res.status(200).json({ data: findAllClientsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findClientData: Client = await this.basicApiService.findModelById(req.params.id);

      res.status(200).json({ data: findClientData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public updateClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const clientId: string = req.params.id;
      const clientData: Client = req.body;
      const updatedApartmentData: Client = await this.basicApiService.updateModel(clientId, clientData);

      res.status(200).json({ data: updatedApartmentData, message: 'updateOne' });
    } catch (error) {
      next(error);
    }
  };

  public deleteClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const clientId: string = req.params.id;
      const deletedClientData: Client = await this.basicApiService.deleteModel(clientId);

      res.status(200).json({ data: deletedClientData, message: 'deleteOne' });
    } catch (error) {
      next(error);
    }
  };

  public createClient = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdClientData: Client = await this.basicApiService.createModel(req.body);

      res.status(200).json({ data: createdClientData, message: 'create' });
    } catch (error) {
      next(error);
    }
  };
}
