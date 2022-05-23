import styles from './Header.module.css';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MouseEvent } from 'react';

export function Header() {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <header className={styles.container}>
      <img
        src="./src/assets/colorwheel.svg"
        alt="Colour Shop Logo"
        className={styles.logo}
      />
      <h1>Colour Shop</h1>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.profile}
          onClick={handleOnClick}
          value="profile"
        >
          <CgProfile size={24} />
        </button>
        <button className={styles.cart} onClick={handleOnClick} value="cart">
          <AiOutlineShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
}
