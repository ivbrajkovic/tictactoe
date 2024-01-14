import { Outlet } from 'react-router';
import { Group, AppShell, Title } from '@mantine/core';
import { Navbar } from 'layout/Navbar';

import classes from './Layout.module.css';

export const Layout = () => (
  <AppShell
    padding="xl"
    header={{ height: 56 }}
    navbar={{ width: 62, breakpoint: 0 }}
    classNames={{ header: classes.header, main: classes.main }}
  >
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Title order={2}>Tic Tac Toe</Title>
      </Group>
    </AppShell.Header>
    <Navbar />
    <AppShell.Main>
      <Outlet />
    </AppShell.Main>
  </AppShell>
);
