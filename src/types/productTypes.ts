export interface IProduct {
  article: string;
  box: string;
  createdAt: string;
  currency: string;
  description: string;
  fuel: string;
  imagesUrl: [string];
  mark: string;
  mode: string;
  model: string;
  numberOfProduct: number;
  price: number;
  product: string;
  state: string;
  type: string;
  bodyType: string;
  updatedAt: string;
  volume: string;
  year: number;
  __v: number;
  _id: string;
  views: number;
}

export interface IOptionsInitialState {
  autos: [IAutos] | any;
  options: IOptions[] | null;
  status: string;
  errors: any;
  partsCategory: any;
}

export interface IOptions {
  _id: string;
  years: [number];
  fuel: ["бензин", "дизель"];
  type: [string];
  box: ["АКПП", "МКПП"];
  bodyType: [string];
  __v: number;
}

export interface IAutoPartsInitialState {
  parts: IProduct[] | [];
  product: IProduct | null;
  loading: boolean;
  errors: any;
  totalPages: number;
  currentPage: number;
  totalProducts: number;
  limit: number;
}

export interface IAutos {
  _id: string;
  mark: string;
  models: [string];
}
