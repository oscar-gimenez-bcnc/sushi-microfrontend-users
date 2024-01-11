import { ErrorBoundary } from 'react-error-boundary';
import GenericError from './components/GenericError';
import { User } from './domain/types/domain';

function App() {
  const users: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    }
  ];

  return (
    <div className="container mx-auto">
      <ErrorBoundary fallback={<GenericError />}>
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="table table-md">
              <thead>
                <tr>
                  <th aria-label="Table Header" />
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <th>{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        {`${user.address.street} ${user.address.suite}. ${user.address.city} ${user.address.zipcode} (${user.address.geo.lat}, ${user.address.geo.lng})`}
                      </td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>{`${user.company.name} ${user.company.catchPhrase}. ${user.company.bs}`} </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
