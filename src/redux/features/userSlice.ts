import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Storage } from '../../utils/storage';
import { User } from '../types';

interface State {
  user: User | null;
}

const initialState: State = {
  user: null
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      Storage.save('user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logout: (state, action: PayloadAction<string>) => {
      Storage.remove(action.payload);
      state.user = null;
    }
  }
});
