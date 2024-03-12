import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { UsersTableProvider } from '../../modules/UsersTable/contexts/UsersTableContext';

const MainLayout: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <Header />
      <div className="divider divider-primary" />
      <UsersTableProvider>
        <Outlet />
      </UsersTableProvider>
    </div>
  );
};

export default MainLayout;
