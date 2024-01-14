import { type IUser } from '@/domain/models/IUser';
import { createContext, useState } from 'react';

interface IUsersTableContext {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  errorMessage: string | undefined;
  setErrorMessage: (errorMessage: string | undefined) => void;
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

const UsersTableContext = createContext<IUsersTableContext>({
  isLoading: true,
  setIsLoading: () => {},
  errorMessage: undefined,
  setErrorMessage: () => {},
  users: [],
  setUsers: () => {}
});

interface UsersTableProviderProps {
  children: React.ReactNode;
}

const UsersTableProvider: React.FC<UsersTableProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [users, setUsers] = useState<IUser[]>([]);

  const contextValue = {
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage,
    users,
    setUsers
  };

  return <UsersTableContext.Provider value={contextValue}>{children}</UsersTableContext.Provider>;
};

export { UsersTableContext, UsersTableProvider };
