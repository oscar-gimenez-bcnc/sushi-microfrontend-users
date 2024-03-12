import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import MainLayout from '@/ui/components/MainLayout';
import UsersTable from '@/ui/modules/UsersTable';
import DetailPage from '@/ui/modules/DetailPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<UsersTable />} />
      <Route path="/:id" element={<DetailPage />} />
    </Route>
  )
);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
