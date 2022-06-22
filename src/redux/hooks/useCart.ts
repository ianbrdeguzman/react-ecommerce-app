import { useEffect, useState } from 'react';
import { useAppSelector } from '.';

export function useCart() {
  const [cartLength, setLength] = useState<number>(0);
  const [cartPrice, setCartPrice] = useState<number>(0);
  const [shippingPrice, setShippingPrice] = useState<number>(0);
  const [taxPrice, setTaxPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { cartItems } = useAppSelector((state) => state.cartSlice);

  useEffect(() => {
    const cartLength = cartItems.reduce(
      (prev, curr) => (prev += curr.quantity),
      0
    );
    const cartPrice = cartItems.reduce(
      (prev, curr) => prev + curr.quantity * curr.price,
      0
    );
    const shippingPrice = cartLength > 5 ? 0 : cartLength < 1 ? 0 : 10;
    const taxPrice = +cartPrice * 0.13;
    const totalPrice = cartPrice + shippingPrice + taxPrice;

    setLength(cartLength);
    setCartPrice(+cartPrice.toFixed(2));
    setShippingPrice(+shippingPrice.toFixed(2));
    setTaxPrice(+taxPrice.toFixed(2));
    setTotalPrice(+totalPrice.toFixed(2));
  }, [cartItems]);

  return { cartPrice, cartLength, shippingPrice, taxPrice, totalPrice };
}
