import { ElementRef, MouseEventHandler, useRef } from 'react';
import { Menu } from '@mantine/core';
import { IconDroplet } from '@tabler/icons-react';

import { ColorSchemeSwitch } from 'components/ColorSchemeSwitch';
import { LogoutMenuItem } from 'components/UserMenu/LogoutMenuItem';
import { UserButton } from 'components/UserMenu/UserButton';

export const UserMenu = () => {
  const targetRef = useRef<ElementRef<'input'>>(null);

  const toggleColorScheme: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    targetRef.current?.click();
  };

  return (
    <Menu withinPortal width={230} position="bottom-end">
      <Menu.Target>
        <UserButton />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>View Options</Menu.Label>
        <Menu.Item
          leftSection={<IconDroplet size={18} />}
          closeMenuOnClick={false}
          rightSection={<ColorSchemeSwitch ref={targetRef} />}
          onClick={toggleColorScheme}
        >
          Color Scheme
        </Menu.Item>
        <Menu.Divider />
        <LogoutMenuItem />
      </Menu.Dropdown>
    </Menu>
  );
};
