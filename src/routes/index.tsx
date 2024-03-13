import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import MainLayout from '@/ui/components/MainLayout';
import UsersTable from '@/ui/modules/UsersTable';
import DetailPage from '@/ui/modules/DetailPage';

const routerMicrofrontend = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/users/" element={<UsersTable />} />
      <Route path="/users/:id" element={<DetailPage />} />
    </Route>
  )
);

const routerStandalone = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<UsersTable />} />
      <Route path="/users/:id" element={<DetailPage />} />
    </Route>
  )
);

interface AppRouterProps {
  userId?: string;
  isMicrofrontend: boolean;
}
const AppRouter: React.FC<AppRouterProps> = ({ isMicrofrontend }) => {
  return <RouterProvider router={isMicrofrontend ? routerMicrofrontend : routerStandalone} />;
};

export default AppRouter;
