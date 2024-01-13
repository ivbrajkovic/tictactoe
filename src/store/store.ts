import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { tictactoeEmptyApi } from 'api/tictactoeEmptyApi';
import authReducer from 'features/auth/AuthSlice';

const persistActions = [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE];
const authReducerPersisted = persistReducer(
  { key: 'auth', storage },
  authReducer,
);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    [tictactoeEmptyApi.reducerPath]: tictactoeEmptyApi.reducer,
    auth: authReducerPersisted,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: persistActions },
    }).concat(tictactoeEmptyApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
