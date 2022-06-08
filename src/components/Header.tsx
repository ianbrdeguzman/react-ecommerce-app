import { useEffect, useMemo } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { cartSlice, ProductWithQty } from '../redux/features/cartSlice';
import { userSlice } from '../redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { User } from '../redux/types';
import { Storage } from '../utils/storage';

import styles from './Header.module.css';

export function Header() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userSlice);
  const { cartItems } = useAppSelector((state) => state.cartSlice);
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Not yet implemented');
  };

  useEffect(() => {
    if (!user) {
      const rawUser = Storage.load('user');
      const user: User = rawUser ? JSON.parse(rawUser) : null;
      if (user) {
        dispatch(userSlice.actions.login(user));
      }
    }
    if (cartItems.length === 0) {
      const rawCartItems = Storage.load('cartItems');
      const cartItems: ProductWithQty[] = JSON.parse(rawCartItems ?? '');
      if (cartItems.length > 0) {
        dispatch(cartSlice.actions.load(cartItems));
      }
    }
  }, [user, cartItems]);

  const numOfCartItems = useMemo(() => {
    return cartItems.reduce((prev, curr) => {
      return prev + curr.qty;
    }, 0);
  }, [cartItems]);

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link to="/">
          <img
            src="../src/assets/amazon-logo.svg"
            alt="E-Commerce App Logo"
            className={styles.logo}
          />
        </Link>
        <form className={styles.form} onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className={styles.input}
          />
          <button type="submit" className={styles.search} tabIndex={-1}>
            <AiOutlineSearch size={20} />
          </button>
        </form>
      </div>
      <div className={styles.buttons}>
        <Link to="/login" className={styles.signin}>
          <p>
            Hello, <span>{user ? user.name : 'Sign in'}</span>
          </p>
          <p>
            <b> Accounts & Lists</b>
          </p>
        </Link>
        <Link to="/order-history" className={styles.order}>
          <p>Returns</p>
          <p>
            <b>& Orders</b>
          </p>
        </Link>
        <Link to="/cart" className={styles.cart}>
          <AiOutlineShoppingCart size={24} />
          <span className={styles.count}>{numOfCartItems}</span>
        </Link>
      </div>
    </header>
  );
}
