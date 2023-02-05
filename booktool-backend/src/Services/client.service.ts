import { HttpException } from '../Exceptions/http.exception';
import { isEmpty } from '../Utils/util';
import { Client } from '../Types/client.interface';
import clientModel from '../Models/client.model';

export default class ClientService {
  public clientModel = clientModel;

  public async findAllClients() {
    const allClientsData = await clientModel.find();

    return allClientsData;
  }

  public async findOneClient(clientId: string) {
    if (isEmpty(clientId)) throw new HttpException(400, 'Client id is empty');

    const oneClientData = await clientModel.findById(clientId);

    return oneClientData;
  }

  public async createClient(clientData: Client) {
    if (isEmpty(clientData)) throw new HttpException(400, 'Client data is empty');

    const createdClientData = await clientModel.create(clientData);

    return createdClientData;
  }

  public async updateClient(clientData: Client, clientId: string) {
    if (isEmpty(clientData)) throw new HttpException(400, 'Client data is empty');
    if (isEmpty(clientId)) throw new HttpException(400, 'Client id is empty');

    const updatedClientData = await clientModel.findByIdAndUpdate(clientId, { ...clientData, modifiedAt: Date.now() });

    return updatedClientData;
  }

  public async deleteClient(clientId: string) {
    if (isEmpty(clientId)) throw new HttpException(400, 'Client id is empty');

    const deletedClientData = await clientModel.findByIdAndDelete(clientId);

    return deletedClientData;
  }
}
