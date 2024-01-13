import Header from './components/Header';
import UsersTable from './components/UsersTable';
import { UsersTableProvider } from './components/UsersTable/context/UsersTableContext';

const MainLayout: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <Header />
      <div className="divider divider-primary" />
      <UsersTableProvider>
        <UsersTable />
      </UsersTableProvider>
    </div>
  );
};

export default MainLayout;
