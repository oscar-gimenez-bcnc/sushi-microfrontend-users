import { GlobalContext } from '@/ui/context/GlobalContext';
import { DataSources, DownloadMethods } from '@/ui/helpers/enums/enums';
import { type IHookResponse } from '@/ui/helpers/types/types';
import { useContext } from 'react';

const useErrorData = (): IHookResponse => {
  const { errorMessage, setUsers, setDataSource, setDownloadMethod, setErrorMessage } = useContext(GlobalContext);

  const handleOnErrorClick = (): void => {
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
