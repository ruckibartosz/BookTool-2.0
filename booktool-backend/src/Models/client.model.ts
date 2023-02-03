import { model, Schema, Document } from 'mongoose';
import { Client } from '../Types/client.interface';

const clientSchema: Schema = new Schema({
  firstName: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 10,
  },
  lastName: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 10,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  phoneNumber: {
    type: String,
    require: true,
    unique: true,
    minLength: 9,
    maxLength: 9,
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

const clientModel = model<Client & Document>('Client', clientSchema);

export default clientModel;
