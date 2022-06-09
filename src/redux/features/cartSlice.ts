import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Storage } from '../../utils/storage';
import { Product } from '../types';

export interface ProductWithQty extends Product {
  qty: number;
}

interface State {
  cartItems: ProductWithQty[];
  cartItemsLength: number;
  cartItemsPrice: number;
}

const initialState: State = {
  cartItems: [],
  cartItemsLength: 0,
  cartItemsPrice: 0
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
      cartSlice.caseReducers.cartLength(state, action);
      cartSlice.caseReducers.cartPrice(state, action);
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
      cartSlice.caseReducers.cartLength(state, action);
      cartSlice.caseReducers.cartPrice(state, action);
      Storage.save('cartItems', JSON.stringify(localCartItems));
    },
    update: (state, action: PayloadAction<{ id: string; qty: number }>) => {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item._id === action.payload.id) {
          item.qty = action.payload.qty;
        }
        return item;
      });
      state.cartItems = updatedCartItems;
      cartSlice.caseReducers.cartLength(state, action);
      cartSlice.caseReducers.cartPrice(state, action);
      Storage.save('cartItems', JSON.stringify(updatedCartItems));
    },
    load: (state, action) => {
      if (state.cartItems.length === 0) {
        const rawCartItems = Storage.load('cartItems');
        const parseCartItems: ProductWithQty[] = JSON.parse(rawCartItems ?? '');
        if (parseCartItems.length > 0) {
          state.cartItems = parseCartItems;
        }
        cartSlice.caseReducers.cartLength(state, action);
        cartSlice.caseReducers.cartPrice(state, action);
      }
    },
    cartLength: (state, action) => {
      state.cartItemsLength = state.cartItems.reduce((prev, curr) => {
        return prev + curr.qty;
      }, 0);
    },
    cartPrice: (state, action) => {
      state.cartItemsPrice = state.cartItems.reduce((prev, curr) => {
        return prev + curr.qty * curr.price;
      }, 0);
    }
  }
});
