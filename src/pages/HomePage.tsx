import { ProductList } from '../components/ProductList';
import { Slider } from '../components/Slider';
import { useGetProductsQuery } from '../redux/services/productApi';

import styles from './HomePage.module.css';

export default function HomePage() {
  const { data, isError, isLoading } = useGetProductsQuery();

  return isLoading ? (
    <h1 className={styles.loading}>Loading...</h1>
  ) : isError || !data ? (
    <h1 className={styles.error}>Something went wrong.</h1>
  ) : (
    <div className={styles.container}>
      <Slider />
      <ProductList products={data} />
    </div>
  );
}
