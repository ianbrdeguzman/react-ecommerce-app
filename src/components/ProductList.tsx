import { ProductItem } from './ProductItem';
import { useGetProductsQuery } from '../redux/services/product';
import styles from './ProductList.module.css';

export function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery();

  return error ? (
    <h1 className={styles.error}>Something went wrong.</h1>
  ) : isLoading ? (
    <h1 className={styles.loading}>Loading...</h1>
  ) : (
    <ul className={styles.container}>
      {data?.map((product) => (
        <ProductItem {...product} />
      ))}
    </ul>
  );
}
