import { type ICompany } from '@/domain/models/ICompany';

interface CompanyCellProps {
  company: ICompany;
}

const CompanyCell: React.FC<CompanyCellProps> = ({ company }) => {
  const capitalizedBS = company.bs.charAt(0).toUpperCase() + company.bs.slice(1);

  return (
    <>
      <span className="font-bold">{company.name}.</span> <span>{capitalizedBS}</span>
      <br />
      <span className="text-xs italic">{company.catchPhrase}</span>
    </>
  );
};

export default CompanyCell;
