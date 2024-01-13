import { createSlice } from '@reduxjs/toolkit';
import { tictactoeApi } from 'api/tictactoeApi';
import { RootState } from 'store/store';

type User = {
  id: number;
  username: string;
};

type AuthState = {
  token: string | null;
  user: User | null;
};

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        tictactoeApi.endpoints.loginCreate.matchFulfilled,
        (state, { payload: { token, ...user } }) => {
          state.token = token;
          state.user = user;
        },
      )
      .addMatcher(
        tictactoeApi.endpoints.logoutCreate.matchFulfilled,
        (state) => {
          state.token = null;
          state.user = null;
        },
      );
  },
});

export default authSlice.reducer;

export const selectToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
