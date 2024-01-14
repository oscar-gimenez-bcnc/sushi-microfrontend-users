interface IUsersCacheData {
  expiry: Date;
  users: Map<number, IUserCacheItem>;
}

interface IUserCacheItem {
  expiry: Date;
  data: IUser;
}

interface ICacheActions {
  getUsersCacheData: () => IUsersCacheData | undefined;
  renewUsersExpiryDate: () => void;
  getUserCache: (key: number) => IUser | undefined;
  setUserCache: (key: number, value: IUser) => void;
  clearUsersCache: () => void;
}
