import { ReactNode } from 'react';

import { Tooltip, TooltipProps } from '@mantine/core';

type NavbarLinkProps = TooltipProps & {
  children: ReactNode;
};

export const NavbarTooltip = (props: NavbarLinkProps) => (
  <Tooltip
    offset={10}
    position="right"
    openDelay={500}
    closeDelay={100}
    transitionProps={{ duration: 300 }}
    {...props}
  />
);
