import { Types, Document } from 'mongoose';

export interface Apartment extends Document {
  _id: Types.ObjectId;
  name: string;
  houseNumber: number;
  adultCost: number;
  childrenCost: number;
  maxSlots: number;
  createdAt: Date;
  modifiedAt: Date;
}
