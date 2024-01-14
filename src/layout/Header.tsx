import { Group, AppShell, Title } from '@mantine/core';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { useIsLoggedIn } from 'hooks/useIsLoggedIn';

export const Header = () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Title order={2}>Tic Tac Toe</Title>
        {isLoggedIn ? <UserMenu /> : null}
      </Group>
    </AppShell.Header>
  );
};
