import { Product } from './Product';
import styles from './ProductList.module.css';

const products = [
  {
    title: 'product 1',
    price: 9.99,
    reviews: 1234,
    rating: 4.5,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!'
  },
  {
    title: 'product 2',
    price: 19.99,
    reviews: 12445,
    rating: 4,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!'
  },
  {
    title: 'product 3',
    price: 9.99,
    reviews: 123321,
    rating: 3.5,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!'
  },
  {
    title: 'product 4',
    price: 19.99,
    reviews: 1213,
    rating: 5,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!'
  },
  {
    title: 'product 5',
    price: 9.99,
    reviews: 125423,
    rating: 2,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex!'
  }
];

export function ProductList() {
  return (
    <ul className={styles.container}>
      {products.map((product) => (
        <Product key={product.title} {...product} />
      ))}
    </ul>
  );
}
