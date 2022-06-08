import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Storage } from '../../utils/storage';
import { Product } from '../types';

export interface ProductWithQty extends Product {
  qty: number;
}

interface State {
  cartItems: ProductWithQty[];
}

const initialState: State = {
  cartItems: []
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductWithQty>) => {
      const itemInCart = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (itemInCart) {
        state.cartItems = state.cartItems.map((inCartItem) =>
          inCartItem._id === itemInCart._id ? action.payload : inCartItem
        );
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
      Storage.save('cartItems', JSON.stringify(state.cartItems));
    },
    remove: (state, action: PayloadAction<string>) => {
      const rawLocalCartItems = Storage.load('cartItems');
      const parsedLocalCartItems: ProductWithQty[] = JSON.parse(
        rawLocalCartItems ?? ''
      );
      const localCartItems = parsedLocalCartItems.filter(
        (item) => item._id !== action.payload
      );
      state.cartItems = localCartItems;
      Storage.save('cartItems', JSON.stringify(localCartItems));
    },
    load: (state, action: PayloadAction<ProductWithQty[]>) => {
      state.cartItems = action.payload;
    }
  }
});
