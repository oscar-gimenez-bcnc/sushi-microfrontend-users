import { createContext, useState } from 'react';
import { DataSources, DownloadMethods } from '../helpers/enums/enums';
import { type IUser } from '../../domain/models/IUser';

interface IGlobalContext {
  dataSource: string;
  setDataSource: (dataSource: string) => void;
  downloadMethod: string;
  setDownloadMethod: (downloadMethod: string) => void;
  errorMessage: string | undefined;
  setErrorMessage: (errorMessage: string | undefined) => void;
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

const GlobalContext = createContext<IGlobalContext>({
  dataSource: DataSources.EXTERNAL,
  setDataSource: () => {},
  downloadMethod: DownloadMethods.JSON,
  setDownloadMethod: () => {},
  errorMessage: undefined,
  setErrorMessage: () => {},
  users: [],
  setUsers: () => {}
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [dataSource, setDataSource] = useState<string>(DataSources.EXTERNAL);
  const [downloadMethod, setDownloadMethod] = useState<string>(DownloadMethods.JSON);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [users, setUsers] = useState<IUser[]>([]);

  /*
TODO: Memoize this?
const contextValue = useMemo(
    () => ({
      dataSource,
      setDataSource,
      downloadMethod,
      setDownloadMethod,
      errorMessage,
      setErrorMessage,
      users,
      setUsers
    }),
    [dataSource, downloadMethod, users]
  ); */

  const contextValue = {
    dataSource,
    setDataSource,
    downloadMethod,
    setDownloadMethod,
    errorMessage,
    setErrorMessage,
    users,
    setUsers
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
