import { Link, useParams } from 'react-router-dom';
import { ProductInfo } from '../components/ProductInfo';
import { useGetProductByIdQuery } from '../redux/services/product';

import styles from './ProductPage.module.css';

export default function ProductPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id ?? '');

  return error ? (
    <h1>Something went wrong.</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className={styles.container}>
      <Link to="/">
        <span className={styles.back}>Back</span>
      </Link>
      {data && <ProductInfo product={data} />}
    </div>
  );
}
