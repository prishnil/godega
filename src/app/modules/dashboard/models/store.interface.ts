import { Item } from './items/item.interface';

export class Store {
  name: string;
  description: string;
  address: {
    unit: string;
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  hours: Hours;
  items: {
    item: Item;
    price: number;
  };
}

export interface Hours {
  day: number;
  open: number;
  close: number;
}
