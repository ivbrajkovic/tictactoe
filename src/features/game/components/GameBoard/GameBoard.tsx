import { Box, Paper, UnstyledButton } from '@mantine/core';
import { IconX, IconCircle } from '@tabler/icons-react';

import { GameRead } from 'api/tictactoeApi';
import classes from './GameBoard.module.css';

type GameBoardProps = {
  isDisabled: boolean;
  firstPlayerId: number;
  board: GameRead['board'];
  onItemClick: (rowIndex: number, colIndex: number) => void;
};

type IconProps = {
  id: number | null;
  firstPlayerId: number;
};

const Icon = ({ id, firstPlayerId }: IconProps) => {
  if (id === null) return null;
  if (id === firstPlayerId) return <IconX width="100%" height="100%" />;
  if (id !== firstPlayerId) return <IconCircle width="100%" height="100%" />;
  return null;
};

export const GameBoard = (props: GameBoardProps) => {
  return (
    <Paper
      withBorder
      shadow="md"
      maw={600}
      w="100%"
      p={{ base: 'md', sm: 'xl' }}
    >
      <Box className={classes.board}>
        {props.board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <UnstyledButton
              key={`${rowIndex}-${colIndex}`}
              disabled={props.isDisabled || cell !== null}
              className={classes.item}
              onClick={() => props.onItemClick(rowIndex, colIndex)}
            >
              <Icon id={cell} firstPlayerId={props.firstPlayerId} />
            </UnstyledButton>
          )),
        )}
      </Box>
    </Paper>
  );
};
