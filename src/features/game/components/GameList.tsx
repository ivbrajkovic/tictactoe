import { Anchor, Container, Pagination, Paper, Table } from '@mantine/core';
import { useGamesListQuery } from 'api/tictactoeApi';
import { GameListAction } from 'features/game/components/GameListAction';
import { useCurrentUser } from 'hooks/useCurrentUser';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LIMIT = 5; // limit of games per page
const POLLING_INTERVAL = 10_000; // refresh every 10 seconds, since we don't have websocket

const useOffset = (limit: number) => {
  const [activePage, setPage] = useState(1);
  const offset = (activePage - 1) * limit;
  return { activePage, setPage, offset };
};

export const GameList = () => {
  const user = useCurrentUser();
  const { activePage, setPage, offset } = useOffset(LIMIT);
  const { data } = useGamesListQuery(
    { offset, limit: LIMIT },
    { pollingInterval: POLLING_INTERVAL },
  );

  if (!data) return null;
  const count = Math.ceil((data.count || 0) / LIMIT);

  return (
    <Container>
      <Paper withBorder shadow="md" p="xl">
        <Table.ScrollContainer minWidth={556}>
          <Table striped highlightOnHover withTableBorder verticalSpacing="xs">
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={48}>Id</Table.Th>
                <Table.Th>First player</Table.Th>
                <Table.Th>Second player</Table.Th>
                <Table.Th w={64}>Status</Table.Th>
                <Table.Th>Winner</Table.Th>
                <Table.Th w={166} />
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.results?.map((item) => (
                <Table.Tr key={item.id}>
                  <Table.Td>
                    <Anchor component={NavLink} to={`${item.id}`}>
                      {item.id}
                    </Anchor>
                  </Table.Td>
                  <Table.Td>{item.first_player?.username}</Table.Td>
                  <Table.Td>{item.second_player?.username}</Table.Td>
                  <Table.Td>{item.status}</Table.Td>
                  <Table.Td>{item.winner?.username}</Table.Td>
                  <Table.Td>
                    <GameListAction
                      canJoin={
                        item.status !== 'open' ||
                        item.first_player?.username === user?.username
                      }
                      gameId={item.id}
                    />
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>

        <Pagination
          withEdges
          mt="sm"
          total={count}
          value={activePage}
          onChange={setPage}
        />
      </Paper>
    </Container>
  );
};
