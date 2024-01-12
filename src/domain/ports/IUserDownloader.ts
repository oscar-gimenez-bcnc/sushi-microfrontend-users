import { IUser } from '../models/IUser';

export interface IUserDownloader {
  download: (User: IUser) => Promise<void>;
}
