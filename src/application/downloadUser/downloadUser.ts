import { type IUser } from '@/domain/models/IUser';
import { type IUserDownloader } from '@/domain/ports/IUserDownloader';

export function downloadUser(userDownloader: IUserDownloader) {
  return async (user: IUser): Promise<void> => {
    await userDownloader.download(user);
  };
}
