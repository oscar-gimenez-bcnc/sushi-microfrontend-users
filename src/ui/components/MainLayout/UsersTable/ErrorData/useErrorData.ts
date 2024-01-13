import { useContext } from 'react';
import { GlobalContext } from '../../../../context/GlobalContext';
import { DataSources, DownloadMethods } from '../../../../helpers/enums/enums';

const useErrorData = () => {
  const { errorMessage, setUsers, setDataSource, setDownloadMethod, setErrorMessage } = useContext(GlobalContext);

  const handleOnErrorClick = () => {
    setUsers([]);
    setDataSource(DataSources.EXTERNAL);
    setDownloadMethod(DownloadMethods.JSON);
    setErrorMessage(undefined);
  };
  return {
    states: { errorMessage },
    actions: { handleOnErrorClick }
  };
};

export default useErrorData;
