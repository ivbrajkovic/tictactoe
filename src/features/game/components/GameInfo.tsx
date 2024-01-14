import { Box, Divider, Group, Paper, Text, Title } from '@mantine/core';
import { IconX, IconCircle } from '@tabler/icons-react';

import { GameRead } from 'api/tictactoeApi';

type GameInfoProps = Omit<GameRead, 'board'>;

export const GameInfo = (props: GameInfoProps) => (
  <Paper withBorder shadow="md" p="xl">
    <Group gap="xl" justify="space-between">
      <Box>
        <Title order={3}>Game {props.id}</Title>
        <Text size="sm" c="dimmed">
          {new Date(props.created).toLocaleString()}
        </Text>
      </Box>
      <Divider orientation="vertical" />
      <Box>
        <Group gap="xs">
          <IconX size={18} />
          <Text>{props.first_player?.username}</Text>
        </Group>
        <Group gap="xs">
          <IconCircle size={18} />
          <Text>{props.second_player?.username}</Text>
        </Group>
      </Box>
      <Divider orientation="vertical" />
      <Box>
        <Text>
          Status:{' '}
          <Text component="span" fw="bold">
            {props.status}
          </Text>
        </Text>
        <Text>
          Winner:{' '}
          <Text component="span" fw="bold">
            {props.winner?.username}
          </Text>
        </Text>
      </Box>
    </Group>
  </Paper>
);
