export type Accent = 'coral' | 'teal' | 'sun';

export type Kit = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stations: number;
  quests: number;
  price: number;
  badge: string;
  accent: Accent;
  includes: string[];
};

export type CartLine = {
  kit: Kit;
  qty: number;
};

export type Customer = {
  name: string;
  email: string;
  address: string;
  city: string;
  postcode: string;
  country: string;
};

export type OrderLine = {
  kitId: string;
  name: string;
  qty: number;
  price: number;
};

export type Order = {
  id: string;
  createdAt: string;
  items: OrderLine[];
  subtotal: number;
  shipping: number;
  total: number;
  customer: Customer;
};
