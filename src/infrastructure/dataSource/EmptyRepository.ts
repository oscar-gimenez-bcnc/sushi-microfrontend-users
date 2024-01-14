import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

// This adapter simulates an empty data source
export const createEmptyUserRepository = (): IUserRepository => {
  const list = async (): Promise<IUser[]> => {
    return [];
  };

  return { list };
};
