import { model, Schema, Document } from 'mongoose';
import { Apartment } from '../Types/apartment.interface';

const apartmentSchema: Schema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  houseNumber: {
    type: Number,
    require: true,
  },
  adultCost: {
    type: Number,
    require: true,
  },
  childrenCost: {
    type: Number,
    require: true,
  },
  maxSlots: {
    type: Number,
    require: true,
    minValue: 1,
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

const apartmentModel = model<Apartment & Document>('Apartment', apartmentSchema);

export default apartmentModel;
