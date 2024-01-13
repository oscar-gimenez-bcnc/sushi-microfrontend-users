import { type IUser } from '@/domain/models/IUser';
import IconDownload from '@/ui/components/shared/icons/IconDownload';
import useDownloadCell from './useDownloadCell';

interface DownloadCellProps {
  user: IUser;
}

const DownloadCell: React.FC<DownloadCellProps> = ({ user }) => {
  const {
    actions: { handleDownloadClick }
  } = useDownloadCell();

  return (
    <button
      aria-label="Download button"
      type="button"
      className="btn btn-ghost btn-xs "
      onClick={() => {
        void handleDownloadClick(user);
      }}
    >
      <IconDownload className="h-6 w-6 py-1" />
    </button>
  );
};

export default DownloadCell;
