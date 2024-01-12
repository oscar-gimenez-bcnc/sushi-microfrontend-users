import { useEffect, useState } from 'react';
import { IUser } from '../../../domain/models/IUser';
import { listUsers } from '../../../application/listUsers/listUsers';
import { createApiUserRepository } from '../../../infrastructure/dataSource/ApiUserRepository';

const useUsersTable = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleOnErrorClick = () => {
    setUsers([]);
    setErrorMessage(null);
  };

  useEffect(() => {
    const dataFetcher = async (): Promise<void> => {
      try {
        const userRepository = createApiUserRepository();
        const usersFetched = await listUsers(userRepository)();
        if (usersFetched) setUsers(usersFetched);
      } catch (err) {
        setUsers([]);
        setErrorMessage('Oops! We have difficulties to show this data.');
      }
    };
    dataFetcher();
  }, [errorMessage]);

  return { actions: { handleOnErrorClick }, states: { users, errorMessage } };
};

export default useUsersTable;
