import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductInfo } from '../components/ProductInfo';
import { useGetProductByIdQuery } from '../redux/services/productApi';

import styles from './ProductPage.module.css';

export default function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id ?? skipToken);

  return error ? (
    <h1>Something went wrong.</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        Back
      </button>
      {data && <ProductInfo product={data} />}
    </div>
  );
}
