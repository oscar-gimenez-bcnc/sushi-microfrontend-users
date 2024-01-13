import Header from './Header';
import UsersTable from './UsersTable';
import { UsersTableProvider } from './UsersTable/context/UsersTableContext';

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
