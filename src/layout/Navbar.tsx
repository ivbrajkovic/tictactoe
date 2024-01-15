import { ReactNode } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import juxt from 'lodash/fp/juxt';
import {
  ActionIcon,
  AppShell,
  Avatar,
  Divider,
  Stack,
  Tooltip,
  TooltipProps,
  NavLink as MantineNavLink,
  useMantineColorScheme,
} from '@mantine/core';
import { IconFile, IconList, IconLogout, IconTool } from '@tabler/icons-react';

import { useCurrentUser } from 'hooks/useCurrentUser';
import { useLogout } from 'hooks/useLogout';
import { openGameSettingsModal, openNewGameModal } from 'utils/modals';
import { useIsMobile } from 'hooks/useIsMobile';
import { IconColorScheme } from 'components/IconColorScheme/IconColorScheme';

type NavbarTooltipProps = TooltipProps & {
  children: ReactNode;
};

const NavbarTooltip = (props: NavbarTooltipProps) => (
  <Tooltip
    offset={10}
    position="right"
    openDelay={500}
    closeDelay={100}
    transitionProps={{ duration: 300 }}
    {...props}
  />
);

type NavbarProps = {
  toggleNavbar: () => void;
};

export const Navbar = (props: NavbarProps) => {
  const user = useCurrentUser();
  const isMobile = useIsMobile();
  const { logout, isLogoutLoading } = useLogout();
  const { toggleColorScheme } = useMantineColorScheme();

  const isLoggedIn = Boolean(user);
  const isLoggedOut = !isLoggedIn;

  if (isMobile) {
    return (
      <AppShell.Navbar>
        <AppShell.Section>
          <MantineNavLink
            leftSection={
              <Avatar tt="uppercase">{user?.username.slice(0, 2)}</Avatar>
            }
            label={user?.username}
          />
        </AppShell.Section>
        <Divider />
        <AppShell.Section grow>
          <Stack py="md" align="center">
            <MantineNavLink
              label="New Game"
              disabled={isLoggedOut}
              leftSection={<IconFile />}
              onClick={juxt([openNewGameModal, props.toggleNavbar])}
            />
            <MantineNavLink
              label="Game List"
              disabled={isLoggedOut}
              leftSection={<IconList />}
              // @ts-expect-error
              component={RouterNavLink}
              onClick={props.toggleNavbar}
              to="/games"
              {...(isLoggedOut && { component: 'button' })}
            />
          </Stack>
        </AppShell.Section>
        <Divider />
        <AppShell.Section>
          <Stack py="md" align="center">
            <MantineNavLink
              label="Settings"
              leftSection={<IconTool />}
              onClick={openGameSettingsModal}
            />
            <MantineNavLink
              label="Color scheme"
              leftSection={<IconColorScheme />}
              onClick={toggleColorScheme}
            />
            {isLoggedIn ? (
              <MantineNavLink
                label="Logout"
                leftSection={<IconLogout />}
                onClick={logout}
              />
            ) : null}
          </Stack>
        </AppShell.Section>
      </AppShell.Navbar>
    );
  }

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
            <ActionIcon
              size="xl"
              radius="md"
              variant="filled"
              disabled={isLoggedOut}
              onClick={openNewGameModal}
            >
              <IconFile />
            </ActionIcon>
          </NavbarTooltip>
          <NavbarTooltip label="Game List">
            <ActionIcon
              disabled={isLoggedOut}
              variant="filled"
              size="xl"
              radius="md"
              // @ts-expect-error
              component={RouterNavLink}
              to="/games"
              {...(isLoggedOut && { component: 'button' })}
            >
              <IconList />
            </ActionIcon>
          </NavbarTooltip>
        </Stack>
      </AppShell.Section>
      <Divider />
      <AppShell.Section>
        <Stack py="md" align="center">
          <NavbarTooltip label="Settings">
            <ActionIcon
              size="xl"
              radius="md"
              variant="filled"
              disabled={isLoggedOut}
              onClick={openGameSettingsModal}
            >
              <IconTool />
            </ActionIcon>
          </NavbarTooltip>
          <NavbarTooltip label="Toggle color scheme">
            <ActionIcon size="xl" radius="md" onClick={toggleColorScheme}>
              <IconColorScheme />
            </ActionIcon>
          </NavbarTooltip>
        </Stack>
        <Divider />
        <Stack py="md" align="center">
          {isLoggedIn ? (
            <>
              <NavbarTooltip label="Logout">
                <ActionIcon
                  loading={isLogoutLoading}
                  variant="filled"
                  size="xl"
                  radius="md"
                  onClick={logout}
                >
                  <IconLogout />
                </ActionIcon>
              </NavbarTooltip>
            </>
          ) : null}
        </Stack>
      </AppShell.Section>
    </AppShell.Navbar>
  );
};
