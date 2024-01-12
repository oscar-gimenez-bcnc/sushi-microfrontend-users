import { IUser } from '../../../../domain/models/IUser';
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6 py-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                          </svg>
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
