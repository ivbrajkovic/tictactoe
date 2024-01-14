import { useLogoutCreateMutation } from 'api/tictactoeApi';
import { useNavigate } from 'react-router-dom';
import { parsedErrorNotification } from 'shared/notification';

export const useLogout = () => {
  const navigate = useNavigate();
  const [logoutMutation, { isLoading }] = useLogoutCreateMutation();

  const logout = () =>
    logoutMutation()
      .unwrap()
      .then(() => navigate('/login'))
      .catch(parsedErrorNotification("Couldn't logout"));

  return { logout, isLogoutLoading: isLoading };
};
