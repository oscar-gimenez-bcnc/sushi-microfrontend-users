import { useContext, useEffect } from 'react';
import { listUsers } from '../../../application/listUsers/listUsers';
import { createApiUserRepository } from '../../../infrastructure/dataSource/ApiUserRepository';
import { createHardcodedUserRepository } from '../../../infrastructure/dataSource/HardcodedUserRepository';
import { GlobalContext } from '../../context/GlobalContext';
import { DataSources } from '../../helpers/enums/enums';

const useMainLayout = () => {
  const { dataSource, errorMessage, setErrorMessage, setUsers } = useContext(GlobalContext);

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
};

export default useMainLayout;
