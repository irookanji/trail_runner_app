import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
user: {
  id: string;
  email: string;
  username: string;
}
};

const initialState: initialStateType = {
  user: {
    id: '',
    email: '',
    username: '',
  },
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    saveUser: (state, { payload }) => {
      state.user = payload.user;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { saveUser } = userSlice.actions;
