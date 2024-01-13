import { type IUser } from '@/domain/models/IUser';
import { type IUserDownloader } from '@/domain/ports/IUserDownloader';
import { type DownloadFileProps, downloadFile } from './helper';

export function createCsvUserDownloader(): IUserDownloader {
  const convertUserToCsv = (user: IUser): string => {
    const headers = 'ID,Name,Username,Email,Street,Suite,City,Zipcode,Lat,Lng,Phone,Website,CompanyName,CatchPhrase,Bs';
    const row = [
      user.id,
      user.name,
      user.username,
      user.email,
      user.address.street,
      user.address.suite,
      user.address.city,
      user.address.zipcode,
      user.address.geo.lat,
      user.address.geo.lng,
      user.phone,
      user.website,
      user.company?.name,
      user.company?.catchPhrase,
      user.company?.bs
    ]
      .map((field) => `"${field}"`)
      .join(',');

    return `${headers}\n${row}`;
  };

  const download = async (user: IUser): Promise<void> => {
    const csvContent = convertUserToCsv(user);
    const options: DownloadFileProps = { id: user.id, content: csvContent, extension: 'csv' };
    await downloadFile(options);
  };

  return { download };
}
