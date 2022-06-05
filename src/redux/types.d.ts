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

interface OrderItem {
  _id: string;
  title: string;
  quantity: number;
  image: string;
  price: number;
  productId: string;
}

interface ShippingDetails {
  fullname: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  postal: string;
  phone: string;
}

interface PaymentResult {
  id: string;
  status: string;
  update_time: string;
  email_address: string;
}

export interface Order {
  _id: string;
  createdAt: string;
  orderItems: OrderItem[];
  shippingDetails: ShippingDetails;
  paymentMethod: string;
  paymentResult: PaymentResult;
  itemPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  user: User;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
}
