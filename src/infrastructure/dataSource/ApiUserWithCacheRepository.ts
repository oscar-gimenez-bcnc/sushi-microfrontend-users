import { type IUser } from '@/domain/models/IUser';
import { type IUserRepository } from '@/domain/ports/IUserRepository';

interface createApiUserRepositoryProps {
  cacheActions: ICacheActions;
}

export function createApiUserWithCacheRepository({ cacheActions }: createApiUserRepositoryProps): IUserRepository {
  async function list(): Promise<IUser[]> {
    const cache = cacheActions.getUsersCacheData();

    if (cache !== undefined) {
      if (new Date().getTime() > cache.expiry.getTime()) {
        cacheActions.clearUsersCache();
      } else {
        const x = Array.from(cache.users.values());
        const cachedUsers = x.map((userCacheItem) => {
          return userCacheItem.data;
        });

        console.log('Returned from cache');

        return cachedUsers;
      }
    }

    console.log('Returned from source');
    const source = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status} obtained from ${source}.`);
    }

    const users = await res.json();

    users.forEach((user: IUser) => {
      cacheActions.setUserCache(user.id, user);
      cacheActions.renewUsersExpiryDate();
    });

    return users;
  }

  return { list };
}
