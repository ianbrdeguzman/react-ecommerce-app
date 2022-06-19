import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Ad } from '../components/Ad';
import { CheckoutSteps } from '../components/CheckoutSteps';
import { cartSlice, PaymentMethod } from '../redux/features/cartSlice';
import { useAppDispatch } from '../redux/hooks';

import styles from './PaymentSelectionPage.module.css';

export default function PaymentSelectionPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      method: PaymentMethod.paypal
    }
  });

  const handleOnSubmit: SubmitHandler<any> = (data) => {
    dispatch(cartSlice.actions.updatePaymentMethod(data.method));
    navigate('/place-order');
  };

  /**
   * TODO: Check if cart is not empty
   * add shipping details are provided
   */

  return (
    <div className={styles.container}>
      <CheckoutSteps step={3} className={styles.header} />
      <h1 className={styles.title}>Select payment method</h1>
      <Ad className={styles.ad} />
      <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <label htmlFor="paypal" className={styles.label}>
          <input
            type="radio"
            {...register('method')}
            id="paypal"
            value="paypal"
            className={styles.radio}
          />
          <img
            src="../../src/assets/paypal-logo.png"
            alt="PayPal"
            className={styles.paypalLogo}
          />
        </label>
        <label htmlFor="stripe" className={styles.label}>
          <input
            type="radio"
            {...register('method')}
            id="stripe"
            value="stripe"
            className={styles.radio}
          />
          <img
            src="../../src/assets/stripe-logo.png"
            alt="Stripe"
            className={styles.stripeLogo}
          />
        </label>
        <button type="submit" className={styles.button}>
          Continue
        </button>
      </form>
    </div>
  );
}
