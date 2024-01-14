import { useGamesRetrieveQuery } from 'api/tictactoeApi';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type GameParams = { gameId: string };

const useGameId = () => {
  const { gameId = '' } = useParams<GameParams>();
  const parsedGameId = parseInt(gameId);
  const isGameIdValid = !Number.isNaN(parsedGameId);
  return { parsedGameId, isGameIdValid };
};

export const Game = () => {
  const { parsedGameId, isGameIdValid } = useGameId();
  const { data } = useGamesRetrieveQuery(parsedGameId, {
    skip: !isGameIdValid,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <code>{JSON.stringify(data)}</code>
    </div>
  );
};
