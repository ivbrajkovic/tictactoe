import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import type { To, NavLinkProps } from 'react-router-dom';

import { Tooltip } from '@mantine/core';
import classes from './NavbarLink.module.css';

type NavbarLinkProps = NavLinkProps & {
  to: To;
  label: string;
  children: ReactNode;
};

const NavbarLink = ({ label, children, ...navLinkProps }: NavbarLinkProps) => {
  return (
    <Tooltip
      label={label}
      offset={10}
      position="right"
      openDelay={500}
      closeDelay={100}
      transitionProps={{ transition: 'rotate-right', duration: 300 }}
    >
      <NavLink
        {...navLinkProps}
        className={({ isActive }) =>
          [classes.link, isActive ? classes.active : ''].join(' ')
        }
      >
        {children}
      </NavLink>
    </Tooltip>
  );
};

export default NavbarLink;
