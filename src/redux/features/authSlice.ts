import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

interface State {
  user: User | null;
}

const initialState: State = {
  user: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    save: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  }
});
