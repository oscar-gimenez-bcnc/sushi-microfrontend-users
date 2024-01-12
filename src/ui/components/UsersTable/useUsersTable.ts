import { useEffect, useState } from 'react';
import { IUser } from '../../../domain/models/IUser';
import { listUsers } from '../../../application/listUsers/listUsers';
import { createApiUserRepository } from '../../../infrastructure/dataSource/ApiUserRepository';
import { createHardcodedUserRepository } from '../../../infrastructure/dataSource/HardcodedUserRepository';
import { DataSources } from '../../helpers/enums/enum';

const useUsersTable = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [dataSource, setDataSource] = useState<string>(DataSources.EXTERNAL);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleOnErrorClick = () => {
    setUsers([]);
    setDataSource(DataSources.EXTERNAL);
    setErrorMessage(null);
  };

  const handleOnChangeDataSource = () => {
    setDataSource(dataSource === DataSources.EXTERNAL ? DataSources.INTERNAL : DataSources.EXTERNAL);
  };

  useEffect(() => {
    const dataFetcher = async (): Promise<void> => {
      try {
        const userRepository =
          dataSource === DataSources.EXTERNAL ? createApiUserRepository() : createHardcodedUserRepository();
        const usersFetched = await listUsers(userRepository)();
        if (usersFetched) setUsers(usersFetched);
      } catch (err) {
        setUsers([]);
        setErrorMessage('Oops! We have difficulties to show this data.');
      }
    };
    dataFetcher();
  }, [dataSource, errorMessage]);

  return { actions: { handleOnErrorClick, handleOnChangeDataSource }, states: { users, errorMessage, dataSource } };
};

export default useUsersTable;
