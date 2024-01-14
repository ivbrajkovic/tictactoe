import { createSlice } from '@reduxjs/toolkit';
import { LoginOutput, tictactoeApi } from 'api/tictactoeApi';
import { RootState } from 'store/store';

type AuthState = {
  user: LoginOutput | null;
};

const initialState: AuthState = {
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
        (state, { payload }) => {
          state.user = payload;
        },
      )
      .addMatcher(
        tictactoeApi.endpoints.logoutCreate.matchFulfilled,
        (state) => {
          state.user = null;
        },
      );
  },
});

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
