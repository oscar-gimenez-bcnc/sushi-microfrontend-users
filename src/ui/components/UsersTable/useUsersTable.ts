import { useEffect, useState } from 'react';
import { IUser } from '../../../domain/models/IUser';
import { listUsers } from '../../../application/listUsers/listUsers';
import { createApiUserRepository } from '../../../infrastructure/dataSource/ApiUserRepository';
import { createHardcodedUserRepository } from '../../../infrastructure/dataSource/HardcodedUserRepository';
import { DataSources, DownloadMethods } from '../../helpers/enums/enums';
import { createCsvUserDownloader } from '../../../infrastructure/dataExport/CsvUserExporter';
import { createJsonUserDownloader } from '../../../infrastructure/dataExport/JsonUserExporter';
import { downloadUser } from '../../../application/downloadUser/downloadUser';

const useUsersTable = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [dataSource, setDataSource] = useState<string>(DataSources.EXTERNAL);
  const [downloadMethod, setDownloadMethod] = useState<string>(DownloadMethods.JSON);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleOnErrorClick = () => {
    setUsers([]);
    setDataSource(DataSources.EXTERNAL);
    setDownloadMethod(DownloadMethods.JSON);
    setErrorMessage(null);
  };

  const handleChangeDataSource = () => {
    setDataSource(dataSource === DataSources.EXTERNAL ? DataSources.INTERNAL : DataSources.EXTERNAL);
  };

  const handleChangeDownloadMethod = () => {
    setDownloadMethod(downloadMethod === DownloadMethods.JSON ? DownloadMethods.CSV : DownloadMethods.JSON);
  };

  const handleDownloadClick = async (user: IUser) => {
    console.log(`Results from: ${user.name}`);
    const userDownloader =
      downloadMethod === DownloadMethods.JSON ? createJsonUserDownloader() : createCsvUserDownloader();
    await downloadUser(userDownloader)(user);
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

  return {
    actions: { handleOnErrorClick, handleChangeDataSource, handleDownloadClick, handleChangeDownloadMethod },
    states: { users, errorMessage, dataSource, downloadMethod }
  };
};

export default useUsersTable;
