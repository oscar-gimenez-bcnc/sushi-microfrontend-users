import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './ui/components/GenericError';
import UsersTable from './ui/components/UsersTable';

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
