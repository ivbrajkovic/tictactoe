import { Box, Paper, UnstyledButton } from '@mantine/core';

import classes from './GameBoard.module.css';

type Board = (number | null)[][];

type GameBoardProps = {
  isDisabled: boolean;
  board: Board;
  onItemClick: (rowIndex: number, colIndex: number) => void;
};

export const GameBoard = (props: GameBoardProps) => {
  console.log(props);

  return (
    <Paper withBorder shadow="md" p="xl" maw={600} w="100%">
      <Box className={classes.board}>
        {props.board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <UnstyledButton
              key={`${rowIndex}-${colIndex}`}
              disabled={props.isDisabled}
              className={classes.item}
              onClick={() => props.onItemClick(rowIndex, colIndex)}
            >
              {cell}
            </UnstyledButton>
          )),
        )}
      </Box>
    </Paper>
  );
};
