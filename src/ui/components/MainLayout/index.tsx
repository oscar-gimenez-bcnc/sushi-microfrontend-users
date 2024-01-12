import Header from './Header';
import UsersTable from './UsersTable';
import useMainLayout from './useMainLayout';

const MainLayout: React.FC = () => {
  useMainLayout();

  return (
    <div className="container mx-auto py-4">
      <Header />
      <UsersTable />
    </div>
  );
};

export default MainLayout;
