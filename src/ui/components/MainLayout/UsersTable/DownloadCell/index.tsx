import { IUser } from '../../../../../domain/models/IUser';
import IconDownload from '../../../shared/icons/IconDownload';
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
      onClick={() => handleDownloadClick(user)}
    >
      <IconDownload />
    </button>
  );
};

export default DownloadCell;
