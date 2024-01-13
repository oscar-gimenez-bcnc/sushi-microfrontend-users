import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

// This adapter simulates a broken data source
export function createBrokenRepository(): IUserRepository {
  async function list(): Promise<IUser[]> {
    throw new Error(`You should know it ;-), you are pointing to a broken database.`);
  }

  return { list };
}
