import { mockedUsers } from '../../../__mocks__/users';
import { createApiUserRepository } from '../../infrastructure/dataSource/ApiUserRepository';
import { listUsers } from './listUsers';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('should recover data from source', async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(mockedUsers)
  });
  global.fetch = mockFetch;
  const userRepository = createApiUserRepository();
  const result = await listUsers(userRepository)();

  expect(result).toEqual(mockedUsers);
});

it('should throw an error when an exception raises', async () => {
  const mockFetch = jest.fn().mockRejectedValue(new Error('(Test) Error fetching data'));
  global.fetch = mockFetch;

  let error;
  try {
    const userRepository = createApiUserRepository();
    await listUsers(userRepository)();
  } catch (e) {
    error = e;
  }

  expect(error).toBeDefined();
});

it('should throw an error when the fetch response is not ok', async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    ok: false
  });
  global.fetch = mockFetch;

  let error;
  try {
    const userRepository = createApiUserRepository();
    await listUsers(userRepository)();
  } catch (e) {
    error = e;
  }

  expect(error).toBeDefined();
});
