export interface Product {
  _id: number;
  title: string;
  price: number;
  reviews: number;
  rating: number;
  image: string;
  description: string;
  qty: number;
}

const products: Product[] = [
  {
    _id: 1,
    title: 'Product 1',
    price: 9.99,
    reviews: 1234,
    rating: 4.5,
    qty: 10,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!'
  },
  {
    _id: 2,
    title: 'Product 2',
    price: 19.99,
    reviews: 12445,
    rating: 4,
    qty: 0,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!'
  },
  {
    _id: 3,
    title: 'Product 3',
    price: 9.99,
    reviews: 123321,
    rating: 3.5,
    qty: 15,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!'
  },
  {
    _id: 4,
    title: 'Product 4',
    price: 19.99,
    reviews: 1213,
    rating: 5,
    qty: 3,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!'
  },
  {
    _id: 5,
    title: 'Product 5',
    price: 9.99,
    reviews: 125423,
    rating: 2,
    qty: 7,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!'
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id: number) {
  return products.find((item) => item._id === id);
}
