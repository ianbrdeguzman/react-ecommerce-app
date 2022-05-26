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
        <Link key={product._id} to={`/product/${product._id}`}>
          <ProductItem {...product} />
        </Link>
      ))}
    </ul>
  );
}
