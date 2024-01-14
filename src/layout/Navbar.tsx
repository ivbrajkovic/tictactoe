import { AppShell, Stack } from '@mantine/core';
import { IconList, IconFile } from '@tabler/icons-react';

import NavbarLink from 'components/NavbarLink/NavbarLink';

export const Navbar = () => {
  return (
    <AppShell.Navbar>
      <Stack mt="xl" align="center">
        <NavbarLink to="/" label="Home">
          <IconList />
        </NavbarLink>
        <NavbarLink to="/new-game" label="New game">
          <IconFile />
        </NavbarLink>
      </Stack>
    </AppShell.Navbar>
  );
};
