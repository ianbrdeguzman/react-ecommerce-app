import { ProductWithQty } from '../redux/features/cartSlice';
import styles from './CartList.module.css';

interface Props {
  cartItems: ProductWithQty[];
}

export function CartList({ cartItems }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Shopping Cart</h1>
          <p className={styles.subTitle}>Price</p>
        </div>
        <ul className={styles.cartItemContainer}>
          {cartItems.map(({ _id, title, image, price }) => (
            <li key={_id} className={styles.cartItem}>
              <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} />
                <p className={styles.price}>${price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.aside}>
        <p className={styles.text}>
          Subtotal (2 items):{' '}
          <span>
            <b>$23.94</b>
          </span>
        </p>
        <button className={styles.button}>Proceed to checkout</button>
      </div>
    </div>
  );
}
