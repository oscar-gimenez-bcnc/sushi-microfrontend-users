import AddressCell from './components/AddressCell';
import CompanyCell from './components/CompanyCell';
import NameCell from './components/UserCell';
import TableHead from './components/TableHead';
import useUsersTable from './useUsersTable';
import LabelCell from './components/LabelCell';
import DownloadCell from './components/DownloadCell';
import ErrorData from './components/ErrorData';
import { type IUser } from '@/domain/models/IUser';
import EmptyData from './components/EmptyData';
import Loader from './components/Loader';

const UsersTable: React.FC = () => {
  const {
    states: { users, errorMessage, isLoading }
  } = useUsersTable();

  return errorMessage === undefined ? (
    <div className="overflow-x-auto">
      <table className="table table-md bg-white">
        <TableHead />
        <tbody>
          {isLoading === true ? (
            <Loader />
          ) : users.length === 0 ? (
            <EmptyData />
          ) : (
            users.map((user: IUser) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td aria-label="Name cell">
                  <NameCell user={user} />
                </td>
                <td aria-label="Email cell">
                  <LabelCell label={user.email} />
                </td>
                <td aria-label="Address cell">
                  <AddressCell address={user.address} />
                </td>
                <td aria-label="Phone cell">
                  <LabelCell label={user.phone} />
                </td>
                <td aria-label="Website cell">
                  <LabelCell label={user.website} />
                </td>
                <td aria-label="Company cell">
                  <CompanyCell company={user.company} />
                </td>
                <td aria-label="Download row">
                  <DownloadCell user={user} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  ) : (
    <ErrorData />
  );
};

export default UsersTable;
