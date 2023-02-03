export interface Reservation {
  _id: string;
  arrival: Date;
  checkout: Date;
  apartment: string;
  client: string;
  adults: number;
  children: number;
  cost: number;
  status: string;
  createdAt: Date;
  modifiedAt: Date;
}
