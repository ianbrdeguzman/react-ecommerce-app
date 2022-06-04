import React, { useEffect } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { userSlice } from '../redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { User } from '../redux/types';
import { Storage } from '../utils/storage';

import styles from './Header.module.css';

export function Header() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userSlice);
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
  }, [user]);

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
        <Link to={user ? '/profile' : '/login'} className={styles.signin}>
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
          <span className={styles.count}>0</span>
        </Link>
      </div>
    </header>
  );
}
