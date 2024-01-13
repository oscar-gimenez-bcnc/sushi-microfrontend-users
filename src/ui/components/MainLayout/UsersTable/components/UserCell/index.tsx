import { type IUser } from '@/domain/models/IUser';

interface UserCellProps {
  user: IUser;
}

const UserCell: React.FC<UserCellProps> = ({ user }) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <div className="font-bold">{user.name}</div>
        <div className="text-sm opacity-50">{user.username}</div>
      </div>
    </div>
  );
};

export default UserCell;
