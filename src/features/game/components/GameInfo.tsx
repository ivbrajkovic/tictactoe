import { Box, Group, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import { IconX, IconCircle } from '@tabler/icons-react';

import { GameRead } from 'api/tictactoeApi';

type GameInfoProps = Omit<GameRead, 'board'>;

export const GameInfo = (props: GameInfoProps) => (
  <Paper withBorder shadow="md" p={{ base: 'md', sm: 'lg' }}>
    <SimpleGrid
      cols={{ base: 1, xs: 3 }}
      spacing={{ base: 'xs', xs: 'xl' }}
      style={{ whiteSpace: 'nowrap' }}
    >
      <Box>
        <Title order={4}>Game {props.id}</Title>
        <Text size="sm" c="dimmed">
          {new Date(props.created).toLocaleString()}
        </Text>
      </Box>

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
    </SimpleGrid>
  </Paper>
);
