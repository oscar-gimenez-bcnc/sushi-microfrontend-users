import { IUser } from '../../domain/models/IUser';
import { IUserDownloader } from '../../domain/ports/IUserDownloader';

export function downloadUser(userDownloader: IUserDownloader) {
  return async (user: IUser): Promise<void> => {
    return userDownloader.download(user);
  };
}
