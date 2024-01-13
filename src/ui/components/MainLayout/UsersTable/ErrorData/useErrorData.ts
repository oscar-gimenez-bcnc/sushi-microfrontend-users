import { GlobalContext } from '@/ui/context/GlobalContext';
import { type IHookResponse } from '@/ui/helpers/types/types';
import { useContext } from 'react';

const useErrorData = (): IHookResponse => {
  const { errorMessage, setErrorMessage } = useContext(GlobalContext);

  const handleOnErrorClick = (): void => {
    setErrorMessage(undefined);
  };

  return {
    states: { errorMessage },
    actions: { handleOnErrorClick }
  };
};

export default useErrorData;
