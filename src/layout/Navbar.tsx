import { AppShell, Avatar, Divider, Stack } from '@mantine/core';
import { IconFile, IconList, IconLogout } from '@tabler/icons-react';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle';
import { NavbarActionIcon } from 'components/NavbarActionIcon';
import { NavbarTooltip } from 'components/NavbarTooltip';
import { useCurrentUser } from 'hooks/useCurrentUser';
import { useLogout } from 'hooks/useLogout';
import { NavLink } from 'react-router-dom';
import { openNewGameModal } from 'utils/modals';

export const Navbar = () => {
  const user = useCurrentUser();
  const { logout, isLogoutLoading } = useLogout();

  const isLoggedIn = Boolean(user);
  const isLoggedOut = !isLoggedIn;

  return (
    <AppShell.Navbar>
      <AppShell.Section>
        <Stack py="md" align="center">
          <Avatar tt="uppercase">{user?.username.slice(0, 2)}</Avatar>
        </Stack>
      </AppShell.Section>
      <Divider />
      <AppShell.Section grow>
        <Stack py="md" align="center">
          <NavbarTooltip label="Game List">
            <NavbarActionIcon disabled={isLoggedOut} onClick={openNewGameModal}>
              <IconFile />
            </NavbarActionIcon>
          </NavbarTooltip>
          <NavbarTooltip label="Game List">
            <NavbarActionIcon
              disabled={isLoggedOut}
              component={NavLink}
              to="/games"
            >
              <IconList />
            </NavbarActionIcon>
          </NavbarTooltip>
        </Stack>
      </AppShell.Section>
      <Divider />
      <AppShell.Section>
        <Stack py="md" align="center">
          <NavbarTooltip label="Toggle color scheme">
            <ColorSchemeToggle />
          </NavbarTooltip>
          {isLoggedIn ? (
            <NavbarTooltip label="Logout">
              <NavbarActionIcon loading={isLogoutLoading} onClick={logout}>
                <IconLogout />
              </NavbarActionIcon>
            </NavbarTooltip>
          ) : null}
        </Stack>
      </AppShell.Section>
    </AppShell.Navbar>
  );
};
