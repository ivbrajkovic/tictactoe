import { forwardRef } from 'react';
import {
  ActionIcon,
  ActionIconProps,
  createPolymorphicComponent,
} from '@mantine/core';

export const NavbarActionIcon = createPolymorphicComponent<
  'button',
  ActionIconProps
>(
  forwardRef<HTMLButtonElement, ActionIconProps>((props, ref) => (
    <ActionIcon
      ref={ref}
      variant="filled"
      size="xl"
      radius="md"
      {...props}
      {...(props.disabled && { component: 'button' })}
    />
  )),
);
