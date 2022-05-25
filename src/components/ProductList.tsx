import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from './ProductItem';
import { getProducts, Product } from '../data';
import styles from './ProductList.module.css';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <ul className={styles.container}>
      {products.map((product) => (
        <Link to={`/product/${product._id}`}>
          <ProductItem key={product._id} {...product} />
        </Link>
      ))}
    </ul>
  );
}
