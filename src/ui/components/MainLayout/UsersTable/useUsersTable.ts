import { GlobalContext } from '@/ui/context/GlobalContext';
import { type IHookResponse } from '@/ui/helpers/types/types';
import { useContext, useEffect } from 'react';

const useUsersTable = (): IHookResponse => {
  const { users, errorMessage } = useContext(GlobalContext);

  useEffect(() => {
    console.log(`Rendering the table with ${users.length} users`);
  }, [users]);

  return {
    states: { users, errorMessage }
  };
};

export default useUsersTable;
