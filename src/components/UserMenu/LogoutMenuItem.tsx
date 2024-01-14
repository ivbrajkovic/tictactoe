import { useNavigate } from 'react-router-dom';
import { Loader, Menu } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';

import { useLogoutCreateMutation } from 'api/tictactoeApi';
import { errorNotification } from 'shared/notification';
import { ApiErrorResponse } from 'types';

export const LogoutMenuItem = () => {
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutCreateMutation();

  const handleLogoutClick = () =>
    logout()
      .unwrap()
      .then(() => navigate('/login'))
      .catch((response: ApiErrorResponse) =>
        errorNotification({
          message: response.data.errors[0].message,
        }),
      );

  return (
    <Menu.Item
      closeMenuOnClick={false}
      disabled={isLoading}
      leftSection={<IconLogout size={18} />}
      rightSection={isLoading ? <Loader size="xs" /> : null}
      onClick={handleLogoutClick}
    >
      Logout
    </Menu.Item>
  );
};
