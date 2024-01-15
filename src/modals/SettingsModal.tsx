import { Button, Group, NumberInput, Stack } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import {
  setGameListPullInterval,
  setGamePullInterval,
} from 'features/game/gameSlice';
import { useAppDispatch } from 'hooks/store';
import { useRef, useState } from 'react';
import { store } from 'store/store';

export const SettingsModal = ({ context, id }: ContextModalProps) => {
  const dispatch = useAppDispatch();

  const [gamePullIntervalLocal, setGamePullIntervalLocal] = //
    useState<string | number>(() => store.getState().game.gamePullInterval);

  const [gameListPullIntervalLocal, setGameListPullIntervalLocal] = //
    useState<string | number>(() => store.getState().game.gameListPullInterval);

  const gamePullIntervalInputRef = useRef<HTMLInputElement>(null);
  const gameListPullIntervalInputRef = useRef<HTMLInputElement>(null);

  const closeModal = () => context.closeModal(id);

  const saveSettings = () => {
    dispatch(setGamePullInterval(Number(gamePullIntervalLocal)));
    dispatch(setGameListPullInterval(Number(gameListPullIntervalLocal)));
    closeModal();
  };

  return (
    <Stack>
      <NumberInput
        ref={gamePullIntervalInputRef}
        allowNegative={false}
        label="Game pull interval"
        placeholder="Enter game pull interval"
        step={1000}
        value={gamePullIntervalLocal}
        onChange={setGamePullIntervalLocal}
      />
      <NumberInput
        ref={gameListPullIntervalInputRef}
        allowNegative={false}
        label="Game list pull interval"
        placeholder="Enter game list pull interval"
        step={1000}
        startValue={4000}
        value={gameListPullIntervalLocal}
        onChange={setGameListPullIntervalLocal}
      />

      <Group mt="md" justify="flex-end">
        <Button variant="default" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="filled" onClick={saveSettings}>
          Save
        </Button>
      </Group>
    </Stack>
  );
};
