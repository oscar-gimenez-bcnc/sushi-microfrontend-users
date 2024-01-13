import { type IUser } from '@/domain/models/IUser';
import { type IUserDownloader } from '@/domain/ports/IUserDownloader';

export function createJsonUserDownloader(): IUserDownloader {
  async function download(user: IUser): Promise<void> {
    const jsonContent = JSON.stringify(user, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.setAttribute('download', `user_${user.id}.json`);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return { download };
}
