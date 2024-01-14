import { IconX, IconCheck } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { getErrorMessage } from 'utils/errors';

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

export const parsedErrorNotification =
  (title = 'Error', message?: string) =>
  (error: any) => {
    const errorMessage = message ?? getErrorMessage(error);
    errorNotification({ title, message: errorMessage });
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
