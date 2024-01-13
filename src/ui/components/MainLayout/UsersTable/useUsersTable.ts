import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { DataSources, DownloadMethods } from '../../../helpers/enums/enums';

const useUsersTable = () => {
  const { users, errorMessage, setDataSource, setDownloadMethod, setUsers, setErrorMessage } =
    useContext(GlobalContext);

  const handleOnErrorClick = () => {
    setUsers([]);
    setDataSource(DataSources.EXTERNAL);
    setDownloadMethod(DownloadMethods.JSON);
    setErrorMessage(undefined);
  };

  useEffect(() => {
    console.log('Rendering the table', users);
  }, [users]);

  return {
    actions: { handleOnErrorClick },
    states: { users, errorMessage }
  };
};

export default useUsersTable;
