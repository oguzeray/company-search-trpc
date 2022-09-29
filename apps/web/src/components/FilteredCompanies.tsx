import CompanyCardUI from "../ui-elements/companyCard";
import { trpc } from "../utils/trpc";
import { FilterCompanyInput } from "../utils/types";

interface FilteredCompaniesProps {
  input: FilterCompanyInput;
}

const FilteredCompanies = ({ input }: FilteredCompaniesProps) => {
  const { data } = trpc.company.getCompanies.useQuery({
    count: input?.count,
    filter: input?.filter,
  });

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="flex flex-col p-3">
        {data?.map((company) => (
          <CompanyCardUI key={company.name} company={company} />
        ))}
      </div>
    </div>
  );
};

export default FilteredCompanies;
