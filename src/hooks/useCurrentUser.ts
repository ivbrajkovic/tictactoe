import { useSelector } from 'react-redux';

import { selectCurrentUser } from 'features/auth/AuthSlice';

export const useCurrentUser = () => useSelector(selectCurrentUser);
