import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

// This adapter simulates an empty data source
export function createEmptyUserRepository(): IUserRepository {
  async function list(): Promise<IUser[]> {
    return [];
  }

  return { list };
}
