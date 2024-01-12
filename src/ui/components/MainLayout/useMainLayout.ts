import { useContext, useEffect } from 'react';
import { listUsers } from '../../../application/listUsers/listUsers';
import { createApiUserRepository } from '../../../infrastructure/dataSource/ApiUserRepository';
import { createHardcodedUserRepository } from '../../../infrastructure/dataSource/HardcodedUserRepository';
import { GlobalContext } from '../../context/GlobalContext';
import { DataSources } from '../../helpers/enums/enums';
import { IUserRepository } from '../../../domain/ports/IUserRepository';
import { createBrokenRepository } from '../../../infrastructure/dataSource/BrokenRepository';

const useMainLayout = () => {
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
        if (usersFetched) setUsers(usersFetched);
      } catch (err) {
        setUsers([]);
        const message = err instanceof Error ? err.message : 'No information provided.';
        setErrorMessage(`Oops! We have difficulties to show this data. ${message}`);
      }
    };
    dataFetcher();
  }, [dataSource, errorMessage]);
};

export default useMainLayout;
