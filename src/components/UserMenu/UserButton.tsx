import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import { useCurrentUser } from 'hooks/useCurrentUser';

type UserButtonProps = ComponentPropsWithoutRef<'button'>;

export const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  (props, ref) => {
    const user = useCurrentUser();
    if (!user) return null;

    return (
      <UnstyledButton ref={ref} {...props}>
        <Group>
          <Avatar tt="uppercase" title={user.username}>
            {user.username[0]}
          </Avatar>
          <Text size="sm" fw={500}>
            {user.username}
          </Text>
          <IconChevronDown size={18} />
        </Group>
      </UnstyledButton>
    );
  },
);
