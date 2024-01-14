import { Button, Group, Stack, Text } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { GameRead, useGamesCreateMutation } from 'api/tictactoeApi';
import { parsedErrorNotification } from 'shared/notification';

import { browserRouter } from 'router/BrowserRouter';

export const NewGameModal = ({ context, id }: ContextModalProps) => {
  const [create, { isLoading }] = useGamesCreateMutation();

  const closeModal = () => context.closeModal(id);

  const handleCreateSuccess = (gameRead: GameRead) =>
    browserRouter
      .navigate(`/games/${gameRead.id}`, { state: { gameRead } })
      ?.then(closeModal);

  const handleConfirm = () =>
    create()
      .unwrap()
      .then(handleCreateSuccess)
      .catch(parsedErrorNotification('Unable to create game'));

  return (
    <Stack gap="xl">
      <Text>Do you want to start a new game?</Text>
      <Group justify="flex-end">
        <Button variant="outline" disabled={isLoading} onClick={closeModal}>
          Cancel
        </Button>
        <Button loading={isLoading} onClick={handleConfirm}>
          Confirm
        </Button>
      </Group>
    </Stack>
  );
};
