import { type IUser } from '@/domain/models/IUser';
import { createCsvUserDownloader } from '@/infrastructure/dataDownload/CsvUserDownloader';
import { createJsonUserDownloader } from '@/infrastructure/dataDownload/JsonUserDownloader';
import { mockedUsers } from '../../../__mocks__/users';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('should create a download link and generate a blob URL when downloading user data as CSV', async () => {
  const user: IUser = mockedUsers[0];
  const csvExporter = createCsvUserDownloader();

  jest.spyOn(document, 'createElement');
  global.URL.createObjectURL = jest.fn(() => 'mocked blob');

  await csvExporter.download(user);

  expect(document.createElement).toHaveBeenCalledWith('a');
  expect(global.URL.createObjectURL).toHaveBeenCalled();
});

it('should create a download link and generate a blob URL when downloading user data as JSON', async () => {
  const user: IUser = mockedUsers[0];
  const csvExporter = createJsonUserDownloader();

  jest.spyOn(document, 'createElement');
  global.URL.createObjectURL = jest.fn(() => 'mocked blob');

  await csvExporter.download(user);

  expect(document.createElement).toHaveBeenCalledWith('a');
  expect(global.URL.createObjectURL).toHaveBeenCalled();
});
