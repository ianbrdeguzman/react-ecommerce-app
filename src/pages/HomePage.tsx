import { ProductItem } from '../components/ProductItem';
import { Slider } from '../components/Slider';
import { useGetProductsQuery } from '../redux/services/productApi';

import styles from './HomePage.module.css';

export default function HomePage() {
  const { data, isError, isLoading } = useGetProductsQuery();

  return (
    <div className={styles.container}>
      <Slider />
      {isLoading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : isError || !data ? (
        <h1 className={styles.error}>Something went wrong.</h1>
      ) : (
        <div className={styles.productContainer}>
          {data.map((product) => (
            <ProductItem key={product._id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}
