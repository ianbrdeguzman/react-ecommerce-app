import { useEffect } from 'react';
import { cartSlice } from '../redux/features/cartSlice';
import { userSlice } from '../redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { User } from '../redux/types';
import { Storage } from '../utils/storage';

export function useInitialize() {
  const dispatch = useAppDispatch();
  const {
    userSlice: { user },
    cartSlice: { cartItems }
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (!user) {
      const rawUser = Storage.load('user');
      const user: User = rawUser ? JSON.parse(rawUser) : null;
      if (user) {
        dispatch(userSlice.actions.login(user));
      }
    }
    dispatch(cartSlice.actions.loadCartItems([]));
  }, [user, cartItems]);
}
