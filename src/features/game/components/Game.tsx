import {
  useGamesMoveCreateMutation,
  useGamesRetrieveQuery,
} from 'api/tictactoeApi';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import { GameBoard } from 'features/game/components/GameBoard';
import { Container, Paper, Stack } from '@mantine/core';

type GameParams = { gameId: string };

const useGameId = () => {
  const { gameId = '' } = useParams<GameParams>();
  const parsedGameId = parseInt(gameId);
  const isGameIdValid = !Number.isNaN(parsedGameId);
  return { parsedGameId, isGameIdValid };
};

export const Game = () => {
  // const { parsedGameId, isGameIdValid } = useGameId();
  // const { data } = useGamesRetrieveQuery(parsedGameId, {
  //   skip: !isGameIdValid,
  // });

  const [move] = useGamesMoveCreateMutation();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleItemClick = (rowIndex: number, colIndex: number) => {
    console.log(rowIndex, colIndex);
    // move({ id: 1, makeMove: { row: rowIndex, col: colIndex } });
  };

  return (
    <Container>
      <Stack align="center">
        <Paper withBorder shadow="md" p="xl">
          <code>{JSON.stringify(data)}</code>
          <br />
          <br />
        </Paper>

        <GameBoard
          isDisabled={data.status !== 'open'}
          board={data.board}
          onItemClick={handleItemClick}
        />
      </Stack>
    </Container>
  );
};
