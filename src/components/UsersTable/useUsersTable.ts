import { useEffect, useState } from 'react';
import { IUser } from '../../domain/entities/IUser';
import fetchData from '../../domain/api/fetch';

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
        const usersFetched = await fetchData({ url: 'https://jsonplaceholder.typicode.com/users' });
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
