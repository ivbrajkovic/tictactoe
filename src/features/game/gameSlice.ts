import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GameState = {
  gamePullInterval: number;
  gameListPullInterval: number;
};

const initialState: GameState = {
  gamePullInterval: 5_000,
  gameListPullInterval: 30_000,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGamePullInterval(state, action: PayloadAction<number>) {
      state.gamePullInterval = action.payload;
    },
    setGameListPullInterval(state, action) {
      state.gameListPullInterval = action.payload;
    },
  },
});

export default gameSlice.reducer;

export const { setGamePullInterval, setGameListPullInterval } =
  gameSlice.actions;

export const selectGamePullInterval = (state: { game: GameState }) =>
  state.game.gamePullInterval;
export const selectGameListPullInterval = (state: { game: GameState }) =>
  state.game.gameListPullInterval;
