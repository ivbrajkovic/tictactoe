import { Outlet } from 'react-router';
import { AppShell } from '@mantine/core';
import { Header } from 'features/layout/Header';
import { Navbar } from 'features/layout/Navbar';

import classes from './Layout.module.css';

export const Layout = () => (
  <AppShell
    padding="xl"
    header={{ height: 56 }}
    navbar={{
      width: 300,
      breakpoint: 'sm',
    }}
    classNames={{
      header: classes.header,
      main: classes.main,
    }}
  >
    <Header />
    <Navbar />
    <AppShell.Main>
      <Outlet />
    </AppShell.Main>
  </AppShell>
);
