import { type IUser } from '@/domain/models/IUser';
import { type IUserDownloader } from '@/domain/ports/IUserDownloader';

export const downloadUser = (userDownloader: IUserDownloader) => {
  return async (user: IUser): Promise<void> => {
    await userDownloader.download(user);
  };
};
