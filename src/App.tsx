import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './ui/components/GenericError';
import { GlobalProvider } from './ui/contexts/GlobalContext';
import './ui/styles/globals.css';
import AppRouter from './routes';

interface AppProps {
  cacheActions?: ICacheActions;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <GlobalProvider isCacheEnabled={props.cacheActions !== undefined} cacheActions={props.cacheActions}>
          <AppRouter />
        </GlobalProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
