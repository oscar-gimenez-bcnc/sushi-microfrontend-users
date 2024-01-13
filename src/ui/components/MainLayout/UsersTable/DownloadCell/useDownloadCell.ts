import { useContext } from 'react';
import { downloadUser } from '../../../../../application/downloadUser/downloadUser';
import { IUser } from '../../../../../domain/models/IUser';
import { createCsvUserDownloader } from '../../../../../infrastructure/dataDownload/CsvUserDownloader';
import { createJsonUserDownloader } from '../../../../../infrastructure/dataDownload/JsonUserDownloader';
import { GlobalContext } from '../../../../context/GlobalContext';
import { DownloadMethods } from '../../../../helpers/enums/enums';

const useDownloadCell = () => {
  const { downloadMethod } = useContext(GlobalContext);

  const handleDownloadClick = async (user: IUser) => {
    const userDownloader =
      downloadMethod === DownloadMethods.JSON ? createJsonUserDownloader() : createCsvUserDownloader();
    await downloadUser(userDownloader)(user);
  };

  return {
    actions: { handleDownloadClick }
  };
};

export default useDownloadCell;
