import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Rating } from '../components/Rating';
import { getProduct, Product } from '../data';
import { format } from '../utils/format';
import styles from './ProductPage.module.css';

export default function ProductPage() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setProduct(getProduct(+id));
    }
  }, [id]);

  return !product ? (
    <h1>Loading</h1>
  ) : (
    <div className={styles.container}>
      <Link to="/">
        <span className={styles.back}>Back</span>
      </Link>
      <div className={styles.content}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div>
          <h1 className={styles.title}>{product.title}</h1>
          <Rating rating={product.rating} reviews={format(product.reviews)} />
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            fugit dolorum inventore earum natus eveniet repudiandae expedita
            libero fugiat excepturi?
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus perferendis modi adipisci tenetur, pariatur
            praesentium.
          </p>
        </div>
        <div className={styles.aside}>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.delivery}>
            <span>FREE Delivery</span> Wednesday June 1st
          </p>
          <p className={styles.stock}>In Stock</p>
          <div className={styles.quantity}>
            <p>Qty:</p>
            {product.qty > 0 ? (
              <select name="qty" id="qty" className={styles.select}>
                {[...Array(product.qty)].map((i, index) => (
                  <option value={index + 1}>{index + 1}</option>
                ))}
              </select>
            ) : (
              <p>Out of stock</p>
            )}
          </div>
          <button disabled={product.qty === 0} className={styles.button}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
