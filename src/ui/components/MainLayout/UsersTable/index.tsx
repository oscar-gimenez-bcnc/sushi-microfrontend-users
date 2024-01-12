import { IUser } from '../../../../domain/models/IUser';
import IconDownload from '../../shared/icons/IconDownload';
import IconWarning from '../../shared/icons/IconWarning';
import useUsersTable from './useUsersTable';

const UsersTable: React.FC = () => {
  const {
    actions: { handleOnErrorClick, handleDownloadClick },
    states: { users, errorMessage }
  } = useUsersTable();

  return (
    <>
      <div className="divider divider-accent" />
      {errorMessage ? (
        <div role="alert" className="alert alert-warning">
          <IconWarning />
          <span>{errorMessage}</span>
          <button type="button" className="btn btn-neutral" onClick={() => handleOnErrorClick()}>
            Try again
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-md">
            <thead>
              <tr>
                <th aria-label="Table header Id" />
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
                <th aria-label="Table header export button" />
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center">
                    <span role="status" aria-label="Loading" className="loading loading-spinner text-primary" />
                  </td>
                </tr>
              ) : (
                users.map((user: IUser) => {
                  return (
                    <tr key={user.id}>
                      <th>{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        {`${user.address.street} ${user.address.suite}. ${user.address.city} ${user.address.zipcode} (${user.address.geo.lat}, ${user.address.geo.lng})`}
                      </td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>{`${user.company?.name} ${user.company?.catchPhrase}. ${user.company?.bs}`} </td>
                      <td aria-label="Export row">
                        <button
                          aria-label="Export button"
                          type="button"
                          className="btn btn-ghost btn-xs "
                          onClick={() => handleDownloadClick(user)}
                        >
                          <IconDownload />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default UsersTable;
