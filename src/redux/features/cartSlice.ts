import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Storage } from '../../utils/storage';
import { Product, ShippingDetails } from '../types';

export enum PaymentMethod {
  paypal = 'PayPal',
  stripe = 'Stripe'
}

export interface ProductWithQty extends Product {
  quantity: number;
}

interface State {
  cartItems: ProductWithQty[];
  shippingDetails: ShippingDetails | null;
  paymentMethod: PaymentMethod;
}

const initialState: State = {
  cartItems: [],
  shippingDetails: null,
  paymentMethod: PaymentMethod.paypal
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<ProductWithQty>) => {
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
    removeCartItem: (state, action: PayloadAction<string>) => {
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
    updateCartItem: (
      state,
      action: PayloadAction<{ id: string; qty: number }>
    ) => {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item._id === action.payload.id) {
          item.quantity = action.payload.qty;
        }
        return item;
      });
      state.cartItems = updatedCartItems;
      Storage.save('cartItems', JSON.stringify(updatedCartItems));
    },
    loadCartItems: (state, action) => {
      if (state.cartItems.length === 0) {
        const rawCartItems = Storage.load('cartItems');
        if (rawCartItems) {
          const parseCartItems: ProductWithQty[] = JSON.parse(
            rawCartItems ?? ''
          );
          if (parseCartItems.length > 0) {
            state.cartItems = parseCartItems;
          }
        }
      }
    },
    loadShippingDetails: (state, action: PayloadAction<void>) => {
      const rawShippingDetails = Storage.load('shippingDetails');
      if (rawShippingDetails) {
        const parseShippingDetails: ShippingDetails = JSON.parse(
          rawShippingDetails ?? ''
        );
        if (parseShippingDetails) {
          state.shippingDetails = parseShippingDetails;
        }
      }
    },
    addShippingDetails: (state, action: PayloadAction<ShippingDetails>) => {
      state.shippingDetails = action.payload;
      Storage.save('shippingDetails', JSON.stringify(action.payload));
    },
    clearShippingDetails: (state, action: PayloadAction<void>) => {
      state.shippingDetails = null;
    },
    updatePaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.paymentMethod = action.payload;
    }
  }
});
