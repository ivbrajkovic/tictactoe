import {
  Anchor,
  Container,
  Pagination,
  Paper,
  Table,
  Text,
} from '@mantine/core';
import { useGamesListQuery } from 'api/tictactoeApi';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LIMIT = 6;

const useOffset = (limit: number) => {
  const [activePage, setPage] = useState(1);
  const offset = (activePage - 1) * limit;
  return { activePage, setPage, offset };
};

export const GameList = () => {
  const { activePage, setPage, offset } = useOffset(LIMIT);
  const { data } = useGamesListQuery({ offset, limit: LIMIT });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data) return null;
  const count = Math.ceil((data.count || 0) / LIMIT);

  return (
    <Container>
      <Text>Page: {activePage}</Text>
      <Text>Offset: {offset}</Text>
      <Text>count: {data.count}</Text>
      <Text>pages: {count}</Text>
      <br />

      <Paper withBorder shadow="md" p="xl">
        <Table striped highlightOnHover withTableBorder verticalSpacing="xs">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Game Id</Table.Th>
              <Table.Th>First player</Table.Th>
              <Table.Th>Second player</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Winner</Table.Th>
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
                <Table.Td>{item.first_player.username}</Table.Td>
                <Table.Td>{item.second_player.username}</Table.Td>
                <Table.Td>{item.status}</Table.Td>
                <Table.Td>{item.winner?.username}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>

        <Pagination
          mt="sm"
          total={count}
          value={activePage}
          onChange={setPage}
        />
      </Paper>
    </Container>
  );
};
