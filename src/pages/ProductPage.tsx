import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductInfoAside } from '../components/ProductInfoAside';
import { ProductInfo } from '../components/ProductInfo';
import { useGetProductByIdQuery } from '../redux/services/productApi';

import styles from './ProductPage.module.css';

export default function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError, isLoading } = useGetProductByIdQuery(id ?? skipToken);

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        Back
      </button>
      {isLoading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : isError || !data ? (
        <h1 className={styles.error}>Something went wrong.</h1>
      ) : (
        <div className={styles.content}>
          <img src={data.image} alt={data.title} className={styles.image} />
          <ProductInfo {...data} />
          <ProductInfoAside
            _id={data._id}
            stock={data.stock}
            price={data.price}
          />
        </div>
      )}
    </div>
  );
}
