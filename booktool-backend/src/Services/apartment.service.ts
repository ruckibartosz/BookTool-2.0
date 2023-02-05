import { HttpException } from '../Exceptions/http.exception';
import { isEmpty } from '../Utils/util';
import { Apartment } from '../Types/apartment.interface';
import apartmentModel from '../Models/apartments.model';
import { SortOrder } from 'mongoose';

export default class ApartmentService {
  public apartmentModel = apartmentModel;

  public async findAllApartments(sortedBy: string = '', sortOrder: SortOrder) {
    if (sortedBy !== '') {
      const allApartmentsData = await apartmentModel.find().sort([[sortedBy, sortOrder]]);

      return allApartmentsData;
    }

    const allApartmentsData = await apartmentModel.find();
    return allApartmentsData;
  }

  public async findOneApartment(apartmentId: string) {
    if (isEmpty(apartmentId)) throw new HttpException(400, 'Apartment id is empty');

    const oneApartmentData = await apartmentModel.findById(apartmentId);

    return oneApartmentData;
  }

  public async createApartment(apartmentData: Apartment) {
    if (isEmpty(apartmentData)) throw new HttpException(400, 'Apartment data is empty');

    const createdApartmentData = await apartmentModel.create(apartmentData);

    return createdApartmentData;
  }

  public async updateApartment(apartmentData: Apartment, apartmentId: string) {
    if (isEmpty(apartmentData)) throw new HttpException(400, 'Apartment data is empty');
    if (isEmpty(apartmentId)) throw new HttpException(400, 'Apartment id is empty');

    const updatedApartmentData = await apartmentModel.findByIdAndUpdate(apartmentId, { ...apartmentData, modifiedAt: Date.now() });

    return updatedApartmentData;
  }

  public async deleteApartment(apartmentId: string) {
    if (isEmpty(apartmentId)) throw new HttpException(400, 'Apartment id is empty');

    const deletedApartmentData = await apartmentModel.findByIdAndDelete(apartmentId);

    return deletedApartmentData;
  }
}
