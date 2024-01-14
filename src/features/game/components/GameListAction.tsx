import { Button, Group } from '@mantine/core';
import { useGamesJoinCreateMutation } from 'api/tictactoeApi';
import { NavLink, useNavigate } from 'react-router-dom';
import { parsedErrorNotification } from 'shared/notification';

type GameListActionProps = {
  canJoin: boolean;
  gameId: number;
};

export const GameListAction = (props: GameListActionProps) => {
  const navigate = useNavigate();
  const [joinGameMutation, { isLoading }] = useGamesJoinCreateMutation();

  const handleJoinGame = () =>
    joinGameMutation(props.gameId)
      .unwrap()
      .then(() => navigate(`${props.gameId}`))
      .catch(parsedErrorNotification('Unable to join game'));

  return (
    <Group gap="sm">
      <Button component={NavLink} to={`${props.gameId}`}>
        View
      </Button>
      <Button
        disabled={props.canJoin}
        loading={isLoading}
        onClick={handleJoinGame}
      >
        Join
      </Button>
    </Group>
  );
};
