import { useContext } from 'react';
import { DataSources, DownloadMethods } from '../../../helpers/enums/enums';
import { GlobalContext } from '../../../context/GlobalContext';

const useHeader = () => {
  const { dataSource, downloadMethod, setDataSource, setErrorMessage, setDownloadMethod } = useContext(GlobalContext);

  const handleChangeDataSource = () => {
    setErrorMessage(undefined);
    setDataSource(dataSource === DataSources.EXTERNAL ? DataSources.INTERNAL : DataSources.EXTERNAL);
  };

  const handleChangeDownloadMethod = () => {
    setDownloadMethod(downloadMethod === DownloadMethods.JSON ? DownloadMethods.CSV : DownloadMethods.JSON);
  };

  return {
    actions: { handleChangeDataSource, handleChangeDownloadMethod },
    states: { dataSource, downloadMethod }
  };
};

export default useHeader;
