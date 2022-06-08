import { ProductItem } from './ProductItem';
import { Product } from '../redux/types';

import styles from './ProductList.module.css';

interface Props {
  products: Product[];
}

export function ProductList({ products }: Props) {
  return (
    <ul className={styles.container}>
      {products.map((product) => (
        <ProductItem key={product._id} {...product} />
      ))}
    </ul>
  );
}
