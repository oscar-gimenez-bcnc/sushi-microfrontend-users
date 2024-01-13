import { type IUser } from '../models/IUser';

export interface IUserRepository {
  list: () => Promise<IUser[]>;
}
