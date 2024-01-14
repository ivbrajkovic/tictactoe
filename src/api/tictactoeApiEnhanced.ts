import { tictactoeApi } from 'api/tictactoeApi';
import { tagType } from 'api/tictactoeEmptyApi';
import { RootState } from 'store/store';

tictactoeApi.enhanceEndpoints({
  endpoints: {
    gamesList: {
      providesTags: [tagType.gameList],
    },
    gamesCreate: {
      invalidatesTags: [tagType.gameList],
    },
    gamesRetrieve: {
      providesTags: [tagType.gamesRetrieve],
    },
    gamesMoveCreate: {
      invalidatesTags: [tagType.gamesRetrieve],
      async onQueryStarted(
        { id, makeMove: { row, col } },
        { dispatch, getState },
      ) {
        const userId = (getState() as RootState).auth.user?.id;
        dispatch(
          tictactoeApi.util.updateQueryData('gamesRetrieve', id, (draft) => {
            draft.board[row][col] = userId ?? 0;
          }),
        );
      },
    },
  },
});
