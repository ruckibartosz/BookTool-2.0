import { model, Schema, Document, SchemaTypes } from 'mongoose';
import { Reservation } from '../Types/reservation.interface';

const reservationScheme: Schema = new Schema({
  arrival: {
    type: Date,
    require: true,
  },
  checkout: {
    type: Date,
    require: true,
  },
  apartment: {
    type: SchemaTypes.ObjectId,
    require: true,
    ref: 'Apartment',
  },
  client: {
    type: SchemaTypes.ObjectId,
    require: true,
    ref: 'Client',
  },
  adults: {
    type: Number,
    min: 1,
    require: true,
  },
  children: {
    type: Number,
  },
  cost: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    require: true,
    enum: ['paid', 'waiting', 'cancelled', 'half-paid'],
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  modifiedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const reservationModel = model<Reservation & Document>('Reservation', reservationScheme);

export default reservationModel;
