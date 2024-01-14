import { openContextModal } from '@mantine/modals';

export const openNewGameModal = () =>
  openContextModal({
    modal: 'newGame',
    title: 'New Game',
    innerProps: {},
  });
