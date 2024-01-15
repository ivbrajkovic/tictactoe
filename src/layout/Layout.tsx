import { Outlet } from 'react-router';
import { IconTicTac } from '@tabler/icons-react';
import { Group, AppShell, Title, Burger } from '@mantine/core';

import { Navbar } from 'layout/Navbar';
import { useDisclosure } from '@mantine/hooks';

import classes from './Layout.module.css';

export const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding={{ base: 'sm', sm: 'xl' }}
      header={{ height: { base: 56 } }}
      navbar={{
        width: { base: 56 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      classNames={{ main: classes.main }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            size="sm"
            hiddenFrom="sm"
            className={classes.burger}
            opened={opened}
            onClick={toggle}
          />
          <Group gap="xs" className={classes.title}>
            <IconTicTac className={classes.icon} />
            <Title order={4}>Tic Tac Toe</Title>
          </Group>
        </Group>
      </AppShell.Header>

      <Navbar toggleNavbar={toggle} />

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
