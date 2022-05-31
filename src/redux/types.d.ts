export interface Product {
  _id: string;
  title: string;
  price: number;
  reviews: number;
  rating: number;
  stock: number;
  description: string;
  category: string;
  image: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}
