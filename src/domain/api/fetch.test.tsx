import { mockedUsers } from '../../../__mocks__/users';
import fetchData from './fetch';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('recovers data from source', async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(mockedUsers)
  });
  global.fetch = mockFetch;
  const result = await fetchData({ url: 'https://jsonplaceholder.typicode.com/users' });

  expect(result).toEqual(mockedUsers);
});

it('throws an error when an exception raises', async () => {
  const mockFetch = jest.fn().mockRejectedValue(new Error('(Test) Error fetching data'));
  global.fetch = mockFetch;

  let error;
  try {
    await fetchData({ url: 'https://jsonplaceholder.typicode.com/users' });
  } catch (e) {
    error = e;
  }

  expect(error).toBeDefined();
});

it('throws an error when the fetch response is not ok', async () => {
  const mockFetch = jest.fn().mockResolvedValue({
    ok: false
  });
  global.fetch = mockFetch;

  let error;
  try {
    await fetchData({ url: 'https://jsonplaceholder.typicode.com/users' });
  } catch (e) {
    error = e;
  }

  expect(error).toBeDefined();
});
