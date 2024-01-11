import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './components/GenericError';
import UsersTable from './components/UsersTable';

const App = () => {
  return (
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <UsersTable />
      </ErrorBoundary>
    </div>
  );
};

export default App;
