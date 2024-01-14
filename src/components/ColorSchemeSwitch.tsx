import {
  Switch,
  useMantineColorScheme,
  useMantineTheme,
  useComputedColorScheme,
} from '@mantine/core';

import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { forwardRef } from 'react';

export const ColorSchemeSwitch = forwardRef<HTMLInputElement>((props, ref) => {
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
    <Switch
      ref={ref}
      size="md"
      color="dark.4"
      checked={computedColorScheme === 'dark'}
      onChange={toggleColorScheme}
      onLabel={sunIcon}
      offLabel={moonIcon}
      {...props}
    />
  );
});
