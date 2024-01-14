import { type IHookResponse } from '@/ui/shared/types/types';
import { useContext } from 'react';
import { UsersTableContext } from '../../contexts/UsersTableContext';

const useErrorData = (): IHookResponse => {
  const { errorMessage, setErrorMessage } = useContext(UsersTableContext);

  const handleOnErrorClick = (): void => {
    setErrorMessage(undefined);
  };

  return {
    states: { errorMessage },
    actions: { handleOnErrorClick }
  };
};

export default useErrorData;
