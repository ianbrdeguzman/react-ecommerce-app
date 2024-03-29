import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutSteps } from '../components/CheckoutSteps';
import { OrderDetails } from '../components/OrderDetails';
import { OrderItems } from '../components/OrderItems';
import { PlaceOrderSummary } from '../components/PlaceOrderSummary';
import { cartSlice } from '../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useCart } from '../redux/hooks/useCart';
import { useCreateOrderMutation } from '../redux/services/orderApi';

import styles from './PlaceOrderPage.module.css';

export default function PlaceOrderPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { cartPrice, cartLength, shippingPrice, taxPrice, totalPrice } =
    useCart();
  const {
    cartSlice: { cartItems, shippingDetails, paymentMethod },
    userSlice: { user }
  } = useAppSelector((state) => state);
  const [createOrder, { isLoading, isError, data }] = useCreateOrderMutation();

  useEffect(() => {
    if (!shippingDetails) {
      navigate('/shipping');
    }
  }, [shippingDetails]);

  const handleOnClick = async () => {
    const orderItems = cartItems.map((item) => ({
      title: item.title,
      quantity: item.quantity,
      image: item.image,
      price: item.price,
      productId: item._id
    }));
    if (shippingDetails && user) {
      createOrder({
        _id: user._id,
        orderItems: orderItems,
        shippingDetails,
        paymentMethod,
        itemPrice: cartPrice,
        shippingPrice,
        taxPrice,
        totalPrice
      });
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(cartSlice.actions.clearCartItems());
      navigate(`/order/${data.order}`);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <CheckoutSteps step={4} className={styles.header} />
      <h1 className={styles.title}>Review your order</h1>
      <div className={styles.content}>
        <div className={styles.detailsContainer}>
          {shippingDetails && user && (
            <OrderDetails
              shippingDetails={shippingDetails}
              user={shippingDetails.fullname}
              paymentMethod={paymentMethod}
            />
          )}
          <OrderItems
            orderItems={cartItems.map((item) => ({
              _id: item._id,
              title: item.title,
              quantity: item.quantity,
              image: item.image,
              price: item.price,
              productId: item._id
            }))}
          />
        </div>
        <PlaceOrderSummary
          cartLength={cartLength}
          cartPrice={cartPrice}
          shippingPrice={shippingPrice}
          taxPrice={taxPrice}
          totalPrice={totalPrice}
          isPaid={false}
          onClick={handleOnClick}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </div>
  );
}
