import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Stack } from '@mantine/core';

import {
  GameRead,
  useGamesMoveCreateMutation,
  useGamesRetrieveQuery,
} from 'api/tictactoeApi';
import { GameBoard } from 'features/game/components/GameBoard/GameBoard';
import { parsedErrorNotification } from 'shared/notification';
import { GameInfo } from 'features/game/components/GameInfo';
import { skipToken } from '@reduxjs/toolkit/query';

type GameReadState = { gameRead?: GameRead } | null;

const POLLING_INTERVAL = 3_000; // refresh every 3 seconds, since we don't have websocket

const useGameIdFromRouteParams = () => {
  const { gameId = '' } = useParams<{ gameId: string }>();
  const parsedGameId = parseInt(gameId);
  return Number.isNaN(parsedGameId) ? null : parsedGameId;
};

const useGameReadFromRouteState = () => {
  const location = useLocation();
  const { gameRead } = (location.state as GameReadState) || {};
  return gameRead;
};

const useGameReadFromApi = (gameId: number | null) => {
  const gameRead = useGameReadFromRouteState();
  const [pollingInterval, setPollingInterval] = useState(POLLING_INTERVAL);
  const { data = gameRead, error } = useGamesRetrieveQuery(
    gameId ?? skipToken,
    { pollingInterval },
  );
  useEffect(() => {
    error && parsedErrorNotification('Unable to retrieve game')(error);
  }, [error]);
  useEffect(() => {
    if (data?.status === 'finished') {
      setPollingInterval(0);
    }
  }, [data]);
  return data;
};

export const Game = () => {
  const parsedGameId = useGameIdFromRouteParams();
  const data = useGameReadFromApi(parsedGameId);
  const [move] = useGamesMoveCreateMutation();

  const handleMove = (rowIndex: number, colIndex: number) =>
    parsedGameId &&
    move({ id: parsedGameId, makeMove: { row: rowIndex, col: colIndex } })
      .unwrap()
      .catch(parsedErrorNotification('Unable to make move'));

  if (!data) return null;
  const { board, ...gameInfo } = data;

  return (
    <Container>
      <Stack align="center">
        <GameInfo {...gameInfo} />
        <GameBoard
          isDisabled={data.status === 'finished'}
          firstPlayerId={data.first_player?.id}
          board={data.board}
          onItemClick={handleMove}
        />
      </Stack>
    </Container>
  );
};
