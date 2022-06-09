import { Ad } from '../components/Ad';
import { CartList } from '../components/CartList';
import { EmptyCart } from '../components/EmptyCart';
import { useAppSelector } from '../redux/hooks';

import styles from './CartPage.module.css';

export default function CartPage() {
  const { cartItems, cartItemsPrice, cartItemsLength } = useAppSelector(
    (state) => state.cartSlice
  );

  return (
    <div className={styles.container}>
      <Ad />
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartList
          cartItems={cartItems}
          cartItemsPrice={cartItemsPrice}
          cartItemsLength={cartItemsLength}
        />
      )}
    </div>
  );
}
