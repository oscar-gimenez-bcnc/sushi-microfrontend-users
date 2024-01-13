import { createContext, useState } from 'react';
import { DataSources, DownloadMethods } from '../helpers/enums/enums';

interface IGlobalContext {
  dataSource: string;
  setDataSource: (dataSource: string) => void;
  downloadMethod: string;
  setDownloadMethod: (downloadMethod: string) => void;
}

const GlobalContext = createContext<IGlobalContext>({
  dataSource: DataSources.EXTERNAL,
  setDataSource: () => {},
  downloadMethod: DownloadMethods.JSON,
  setDownloadMethod: () => {}
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [dataSource, setDataSource] = useState<string>(DataSources.EXTERNAL);
  const [downloadMethod, setDownloadMethod] = useState<string>(DownloadMethods.JSON);

  const contextValue = {
    dataSource,
    setDataSource,
    downloadMethod,
    setDownloadMethod
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
