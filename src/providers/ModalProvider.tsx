import { ModalsProvider as MantineModalsProvider } from '@mantine/modals';
import { NewGameModal } from 'modals/NewGameModal';
import { SettingsModal } from 'modals/SettingsModal';

export const modals = {
  newGame: NewGameModal,
  settings: SettingsModal,
};

declare module '@mantine/modals' {
  export interface MantineModalsOverride {
    modals: typeof modals;
  }
}

export const ModalsProvider = (props: { children: React.ReactNode }) => (
  <MantineModalsProvider modals={modals}>
    {props.children}
  </MantineModalsProvider>
);
