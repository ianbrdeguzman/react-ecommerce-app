import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Ad } from '../components/Ad';
import { CartList } from '../components/CartList';
import { EmptyCart } from '../components/EmptyCart';
import { cartSlice } from '../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useGetProductByIdQuery } from '../redux/services/productApi';

import styles from './CartPage.module.css';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { id, qty } = useParams();
  const { data } = useGetProductByIdQuery(id ?? skipToken);
  const { cartItems, cartItemsPrice, cartItemsLength } = useAppSelector(
    (state) => state.cartSlice
  );

  useEffect(() => {
    if (data && qty) {
      dispatch(cartSlice.actions.add({ ...data, qty: +qty }));
    }
  }, [data]);

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
