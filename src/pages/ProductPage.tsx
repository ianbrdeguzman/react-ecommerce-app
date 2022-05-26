import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductInfo } from '../components/ProductInfo';
import { getProduct, Product } from '../data';

import styles from './ProductPage.module.css';

export default function ProductPage() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setProduct(getProduct(+id));
    }
  }, [id]);

  return !product ? (
    <h1>Loading</h1>
  ) : (
    <div className={styles.container}>
      <Link to="/">
        <span className={styles.back}>Back</span>
      </Link>
      <ProductInfo product={product} />
    </div>
  );
}
