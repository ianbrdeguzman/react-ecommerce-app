import { cartSlice, ProductWithQty } from '../redux/features/cartSlice';
import { useAppDispatch } from '../redux/hooks';

import styles from './CartList.module.css';

interface Props {
  cartItems: ProductWithQty[];
}

export function CartList({ cartItems }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Shopping Cart</h1>
          <p className={styles.subTitle}>Price</p>
        </div>
        <ul className={styles.cartItemContainer}>
          {cartItems.map(({ _id, title, image, price, stock, qty }) => (
            <li key={_id} className={styles.cartItem}>
              <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} />
                <p className={styles.price}>${price}</p>
              </div>
              <p className={styles.name}>{title}</p>
              <p className={styles.stock}>
                {stock > 0 ? 'In Stock' : 'Out of Stock'}
              </p>
              <div className={styles.selectContainer}>
                <label className={styles.selectLabel}>
                  Qty:
                  <select
                    name="qty"
                    id="qty"
                    className={styles.select}
                    defaultValue={qty}
                    onChange={(e) =>
                      console.log(
                        `change ${_id} value to ${e.currentTarget.value}`
                      )
                    }
                  >
                    {[...Array(stock)].map((i, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  className={styles.deleteButton}
                  onClick={() => dispatch(cartSlice.actions.remove(_id))}
                >
                  Delete
                </button>
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
