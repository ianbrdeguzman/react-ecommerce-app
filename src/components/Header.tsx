import React from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

import styles from './Header.module.css';

export function Header() {
  const handleOnSubmit = (e: React.FormEvent) => {
    alert('Not yet implemented');
  };
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('Not yet implemented');
  };

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img
          src="src/assets/Amazon_logo.svg"
          alt="E-Commerce App Logo"
          className={styles.logo}
        />
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
        <button className={styles.signin} onClick={handleOnClick}>
          <p>Hello, Sign in</p>
          <p>
            <b> Accounts & Lists</b>
          </p>
        </button>
        <button className={styles.order} onClick={handleOnClick}>
          <p>Returns</p>
          <p>
            <b>& Orders</b>
          </p>
        </button>
        <button className={styles.cart} onClick={handleOnClick}>
          <AiOutlineShoppingCart size={24} />
          <span className={styles.count}>0</span>
        </button>
      </div>
    </header>
  );
}
