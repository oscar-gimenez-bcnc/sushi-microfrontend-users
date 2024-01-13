import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';

const useUsersTable = () => {
  const { users, errorMessage } = useContext(GlobalContext);

  useEffect(() => {
    console.log(`Rendering the table with ${users.length} users`);
  }, [users]);

  return {
    states: { users, errorMessage }
  };
};

export default useUsersTable;
