
export type Product = {
    _id: string;
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    count: number;
    photo: string;
};

export type Inputs = {
    name: string;
    sellerName: string;
    description: string;
    count: number;
    price: number;
    category:String,
    image: string;
  };