import useHeader from './useHeader';

const Header: React.FC = () => {
  const {
    actions: { handleChangeDataSource, handleChangeDownloadMethod },
    states: { dataSource, downloadMethod }
  } = useHeader();

  return (
    <div className="flex items-center justify-between gap-2">
      <span>Sushi Users</span>
      <div className="flex items-center justify-end gap-2">
        <h5 className="flex flex-row items-center gap-2 text-sm">
          <span className="badge badge-ghost badge-xs gap-2 p-2">
            {downloadMethod}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </span>
        </h5>
        <button type="button" className="btn btn-accent btn-xs " onClick={() => handleChangeDownloadMethod()}>
          Change Download Method
        </button>
        <h5 className="flex flex-row items-center gap-2 text-sm">
          <span className="badge badge-ghost badge-xs gap-2 p-2">
            {dataSource}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </span>
        </h5>
        <button type="button" className="btn btn-accent btn-xs " onClick={() => handleChangeDataSource()}>
          Change Data source
        </button>
      </div>
    </div>
  );
};

export default Header;
