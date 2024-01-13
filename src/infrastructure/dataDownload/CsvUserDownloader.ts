import { IUser } from '../../domain/models/IUser';
import { IUserDownloader } from '../../domain/ports/IUserDownloader';

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
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.setAttribute('download', `user_${user.id}.csv`);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return { download };
}
