import { GlobalContext } from '@/ui/context/GlobalContext';
import { type IHookResponse } from '@/ui/shared/types/types';
import { useContext, useEffect } from 'react';
import { UsersTableContext } from './context/UsersTableContext';
import { listUsers } from '@/application/listUsers/listUsers';
import { type IUserRepository } from '@/domain/ports/IUserRepository';
import { createApiUserRepository } from '@/infrastructure/dataSource/ApiUserRepository';
import { createBrokenRepository } from '@/infrastructure/dataSource/BrokenRepository';
import { createEmptyUserRepository } from '@/infrastructure/dataSource/EmptyRepository';
import { createHardcodedUserRepository } from '@/infrastructure/dataSource/HardcodedUserRepository';
import { DataSources } from '@/ui/shared/enums/enums';

const useUsersTable = (): IHookResponse => {
  const { dataSource } = useContext(GlobalContext);
  const { isLoading, users, errorMessage, setErrorMessage, setUsers, setIsLoading } = useContext(UsersTableContext);

  useEffect(() => {
    const dataFetcher = async (): Promise<void> => {
      setErrorMessage(undefined);
      setIsLoading(true);
      try {
        const userRepositoryMap: { [key in DataSources]: () => IUserRepository } = {
          [DataSources.EXTERNAL]: createApiUserRepository,
          [DataSources.INTERNAL]: createHardcodedUserRepository,
          [DataSources.EMPTY]: createEmptyUserRepository,
          [DataSources.BROKEN]: createBrokenRepository
        };

        const userRepository = userRepositoryMap[dataSource as DataSources]();

        const usersFetched = await listUsers(userRepository)();
        setUsers(usersFetched);
      } catch (err) {
        setUsers([]);
        const message = err instanceof Error ? err.message : 'No information provided.';
        setErrorMessage(`Oops! We have difficulties to show this data. ${message}`);
      } finally {
        setIsLoading(false);
      }
    };
    void dataFetcher();
  }, [dataSource, errorMessage]);

  return {
    states: { users, errorMessage, isLoading }
  };
};

export default useUsersTable;
