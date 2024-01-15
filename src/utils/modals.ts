import { openContextModal } from '@mantine/modals';

export const openNewGameModal = () =>
  openContextModal({
    modal: 'newGame',
    title: 'New Game',
    innerProps: {},
  });

export const openGameSettingsModal = () =>
  openContextModal({
    modal: 'settings',
    title: 'Settings',
    innerProps: {},
  });
