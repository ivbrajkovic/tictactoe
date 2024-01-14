import { Outlet } from 'react-router';
import { AppShell } from '@mantine/core';
import { Header } from 'layout/Header';
import { Navbar } from 'layout/Navbar';

import classes from './Layout.module.css';

export const Layout = () => (
  <AppShell
    padding="xl"
    header={{ height: 56 }}
    navbar={{
      width: 62,
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
