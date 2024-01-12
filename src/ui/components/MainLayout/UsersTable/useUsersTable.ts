import { useContext, useEffect } from 'react';
import { downloadUser } from '../../../../application/downloadUser/downloadUser';
import { IUser } from '../../../../domain/models/IUser';
import { createCsvUserDownloader } from '../../../../infrastructure/dataExport/CsvUserExporter';
import { createJsonUserDownloader } from '../../../../infrastructure/dataExport/JsonUserExporter';
import { GlobalContext } from '../../../context/GlobalContext';
import { DataSources, DownloadMethods } from '../../../helpers/enums/enums';

const useUsersTable = () => {
  const { users, downloadMethod, errorMessage, setDataSource, setDownloadMethod, setUsers, setErrorMessage } =
    useContext(GlobalContext);

  const handleOnErrorClick = () => {
    setUsers([]);
    setDataSource(DataSources.EXTERNAL);
    setDownloadMethod(DownloadMethods.JSON);
    setErrorMessage(undefined);
  };

  const handleDownloadClick = async (user: IUser) => {
    const userDownloader =
      downloadMethod === DownloadMethods.JSON ? createJsonUserDownloader() : createCsvUserDownloader();
    await downloadUser(userDownloader)(user);
  };

  useEffect(() => {
    console.log('Rendering the table', users);
  }, [users]);

  return {
    actions: { handleOnErrorClick, handleDownloadClick },
    states: { users, errorMessage }
  };
};

export default useUsersTable;
