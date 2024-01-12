import { IUser } from '../../domain/models/IUser';
import { IUserRepository } from '../../domain/repository/IUserRepository';

export function listUsers(userRepository: IUserRepository) {
  return async (): Promise<IUser[]> => {
    return userRepository.list();
  };
}
