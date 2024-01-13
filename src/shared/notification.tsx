import { IconX, IconCheck } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';

export const errorNotification = ({
  title = 'Error',
  message = 'Something went wrong',
}) => {
  notifications.show({
    title,
    message,
    withCloseButton: true,
    color: 'red',
    icon: <IconX />,
  });
};

export const successNotification = ({
  title = 'Success',
  message = 'Action completed successfully',
}) => {
  notifications.show({
    title,
    message,
    withCloseButton: true,
    color: 'green',
    icon: <IconCheck />,
  });
};
