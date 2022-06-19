import { useEffect, useState } from 'react';
import { useAppSelector } from '.';

export function useCart() {
  const [cartLength, setLength] = useState<number>(0);
  const [cartPrice, setPrice] = useState<number>(0);

  const { cartItems } = useAppSelector((state) => state.cartSlice);

  useEffect(() => {
    const cartLength = cartItems.reduce((prev, curr) => (prev += curr.qty), 0);
    const cartPrice = cartItems.reduce(
      (prev, curr) => prev + curr.qty * curr.price,
      0
    );
    setLength(cartLength);
    setPrice(cartPrice);
  }, [cartItems]);

  return { cartPrice, cartLength };
}
