import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Ad } from '../components/Ad';
import { CartAside } from '../components/CartAside';
import { CartItem } from '../components/CartItem';
import { EmptyCart } from '../components/EmptyCart';
import { cartSlice } from '../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useCart } from '../redux/hooks/useCart';
import { useGetProductByIdQuery } from '../redux/services/productApi';

import styles from './CartPage.module.css';

export default function CartPage() {
  const [totalPrice, totalLength] = useCart();
  const dispatch = useAppDispatch();
  const { id, qty } = useParams();
  const { data } = useGetProductByIdQuery(id ?? skipToken);
  const { cartItems } = useAppSelector((state) => state.cartSlice);

  useEffect(() => {
    if (data && qty) {
      dispatch(cartSlice.actions.addCartItem({ ...data, qty: +qty }));
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <Ad />
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartContent}>
            <div className={styles.cartHeader}>
              <h1 className={styles.cartTitle}>Shopping Cart</h1>
              <p className={styles.cartSubTitle}>Price</p>
            </div>
            <ul className={styles.cartItemContainer}>
              {cartItems.map(({ _id, image, title, price, stock, qty }) => (
                <CartItem
                  key={_id}
                  _id={_id}
                  image={image}
                  title={title}
                  price={price}
                  stock={stock}
                  qty={qty}
                />
              ))}
            </ul>
          </div>
          <CartAside cartPrice={totalPrice} cartLength={totalLength} />
        </div>
      )}
    </div>
  );
}
