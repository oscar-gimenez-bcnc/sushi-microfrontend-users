import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

// This adapter simulates a broken data source
export const createBrokenRepository = (): IUserRepository => {
  const list = async (): Promise<IUser[]> => {
    throw new Error(`You should know it ;-), you are pointing to a broken database.`);
  };

  return { list };
};
