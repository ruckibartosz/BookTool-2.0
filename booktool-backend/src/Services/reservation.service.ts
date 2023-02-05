import { HttpException } from '../Exceptions/http.exception';
import { isEmpty } from '../Utils/util';
import { Reservation } from '../Types/reservation.interface';
import reservationModel from '../Models/reservation.model';
import { SortOrder } from 'mongoose';

export default class ReservationService {
  public reservationModel = reservationModel;

  public async findAllReservations(sortedBy: string = '', sortOrder: SortOrder) {
    if (sortedBy !== '') {
      const allReservationsData = await reservationModel.find().sort([[sortedBy, sortOrder]]);

      return allReservationsData;
    }

    const allReservationsData = await reservationModel.find().populate('client').populate('apartment');

    return allReservationsData;
  }

  public async findOneReservation(reservationId: string) {
    if (isEmpty(reservationId)) throw new HttpException(400, 'Reservation id is empty');

    const oneReservationData = await reservationModel.findById(reservationId).populate('client').populate('apartment');

    return oneReservationData;
  }

  public async createReservation(reservationData: Reservation) {
    if (isEmpty(reservationData)) throw new HttpException(400, 'Client data is empty');

    const createdReservationData = await reservationModel.create(reservationData);

    return createdReservationData;
  }

  public async updateReservation(reservationData: Reservation, reservationId: string) {
    if (isEmpty(reservationData)) throw new HttpException(400, 'Reservation data is empty');
    if (isEmpty(reservationId)) throw new HttpException(400, 'Reservation id is empty');

    const updatedReservationData = await reservationModel.findByIdAndUpdate(reservationId, { ...reservationData, modifiedAt: Date.now() });

    return updatedReservationData;
  }

  public async deleteReservation(reservationId: string) {
    if (isEmpty(reservationId)) throw new HttpException(400, 'Reservation id is empty');

    const deletedReservationData = await reservationModel.findByIdAndDelete(reservationId);

    return deletedReservationData;
  }
}
