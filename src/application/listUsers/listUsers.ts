import { IUser } from '../../domain/models/IUser';
import { IUserRepository } from '../../domain/ports/IUserRepository';

export function listUsers(userRepository: IUserRepository) {
  return async (): Promise<IUser[]> => {
    return userRepository.list();
  };
}
