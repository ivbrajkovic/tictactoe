import {
  Group,
  AppShell,
  Switch,
  Title,
  useMantineColorScheme,
  useMantineTheme,
  useComputedColorScheme,
} from '@mantine/core';

import { IconSun, IconMoonStars } from '@tabler/icons-react';

export const Header = () => {
  const theme = useMantineTheme();

  const computedColorScheme = useComputedColorScheme('dark', {
    getInitialValueInEffect: true,
  });

  const { toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const sunIcon = (
    <IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />
  );

  const moonIcon = (
    <IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[6]} />
  );

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Title order={2}>Tic Tac Toe</Title>
        <Group>
          <Switch
            size="md"
            color="dark.4"
            checked={computedColorScheme === 'dark'}
            onChange={toggleColorScheme}
            onLabel={sunIcon}
            offLabel={moonIcon}
          />
        </Group>
      </Group>
    </AppShell.Header>
  );
};
