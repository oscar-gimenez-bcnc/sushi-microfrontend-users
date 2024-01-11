import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './components/GenericError';

function App() {
  return (
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <span>Sushi users</span>
      </ErrorBoundary>
    </div>
  );
}

export default App;
