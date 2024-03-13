import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './ui/components/GenericError';
import { GlobalProvider } from './ui/contexts/GlobalContext';
import './ui/styles/globals.css';
import AppRouter from './routes';

interface AppProps {
  cacheActions?: ICacheActions;
  userId?: string;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  const isMicrofrontend = props.cacheActions !== undefined;
  return (
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <GlobalProvider isCacheEnabled={isMicrofrontend} cacheActions={props.cacheActions}>
          <AppRouter isMicrofrontend={isMicrofrontend} userId={props.userId} />
        </GlobalProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
