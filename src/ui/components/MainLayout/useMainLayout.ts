import { listUsers } from '@/application/listUsers/listUsers';
import { type IUserRepository } from '@/domain/ports/IUserRepository';
import { useContext, useEffect } from 'react';
import { createApiUserRepository } from '@/infrastructure/dataSource/ApiUserRepository';
import { createBrokenRepository } from '@/infrastructure/dataSource/BrokenRepository';
import { createHardcodedUserRepository } from '@/infrastructure/dataSource/HardcodedUserRepository';
import { GlobalContext } from '@/ui/context/GlobalContext';
import { DataSources } from '@/ui/helpers/enums/enums';

const useMainLayout = (): void => {
  const { dataSource, errorMessage, setErrorMessage, setUsers } = useContext(GlobalContext);

  useEffect(() => {
    const dataFetcher = async (): Promise<void> => {
      try {
        const userRepositoryMap: { [key in DataSources]: () => IUserRepository } = {
          [DataSources.EXTERNAL]: createApiUserRepository,
          [DataSources.INTERNAL]: createHardcodedUserRepository,
          [DataSources.BROKEN]: createBrokenRepository
        };

        const userRepository = userRepositoryMap[dataSource as DataSources]();

        const usersFetched = await listUsers(userRepository)();
        setUsers(usersFetched);
      } catch (err) {
        setUsers([]);
        const message = err instanceof Error ? err.message : 'No information provided.';
        setErrorMessage(`Oops! We have difficulties to show this data. ${message}`);
      }
    };
    void dataFetcher();
  }, [dataSource, errorMessage]);
};

export default useMainLayout;
