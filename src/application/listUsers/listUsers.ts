import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

export const listUsers = (userRepository: IUserRepository) => {
  return async (): Promise<IUser[]> => {
    return await userRepository.list();
  };
};
