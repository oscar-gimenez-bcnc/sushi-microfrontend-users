import { type IUser } from '@/domain/models/IUser';
import { type IUserDownloader } from '@/domain/ports/IUserDownloader';
import { type DownloadFileProps, downloadFile } from './helper';

export function createJsonUserDownloader(): IUserDownloader {
  const convertUserToJson = (user: IUser): string => {
    const jsonContent = JSON.stringify(user, null, 2);
    return jsonContent;
  };

  async function download(user: IUser): Promise<void> {
    const jsonContent = convertUserToJson(user);
    const options: DownloadFileProps = { id: user.id, content: jsonContent, extension: 'json' };
    await downloadFile(options);
  }

  return { download };
}
