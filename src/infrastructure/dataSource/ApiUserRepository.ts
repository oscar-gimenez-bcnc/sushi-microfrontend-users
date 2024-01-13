import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

export function createApiUserRepository(): IUserRepository {
  const cache = new Map<number, IUser>();

  async function list(): Promise<IUser[]> {
    const source = 'https://jsonplaceholder.typicode.com/users';

    if (cache.size > 0) {
      return Array.from(cache.values());
    }

    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status} obtained from ${source}.`);
    }

    const users = await res.json();
    users.forEach((user: IUser) => cache.set(user.id, user));

    return users;
  }

  return { list };
}
