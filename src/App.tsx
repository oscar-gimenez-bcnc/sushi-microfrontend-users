import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './ui/components/GenericError';
import MainLayout from './ui/components/MainLayout';
import { GlobalProvider } from './ui/context/GlobalContext';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <GlobalProvider>
          <MainLayout />
        </GlobalProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
