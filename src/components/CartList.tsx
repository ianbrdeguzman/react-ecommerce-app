import { ProductWithQty } from '../redux/features/cartSlice';
import { CartAside } from './CartAside';
import { CartItem } from './CartItem';

import styles from './CartList.module.css';

interface Props {
  cartItems: ProductWithQty[];
  cartItemsPrice: number;
  cartItemsLength: number;
}

export function CartList({
  cartItems,
  cartItemsPrice,
  cartItemsLength
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Shopping Cart</h1>
          <p className={styles.subTitle}>Price</p>
        </div>
        <ul className={styles.cartItemContainer}>
          {cartItems.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </ul>
      </div>
      <CartAside totalPrice={cartItemsPrice} totalItems={cartItemsLength} />
    </div>
  );
}
