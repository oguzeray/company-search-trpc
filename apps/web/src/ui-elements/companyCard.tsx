import { Company } from "../utils/resolver-types";

interface CompanyCardUIProps {
  company: Company;
}

const CompanyCardUI = ({ company }: CompanyCardUIProps) => {
  return (
    <div className="m-2 mx-auto w-full rounded-lg border border-gray-200 bg-gray-200 p-6 shadow-md hover:bg-gray-500">
      <div className="flex">
        <div className="mr-2">
          <img
            alt={`${company.name}-logo`}
            className="rounded-2xl"
            src={company.logoUrl}
            width="80px"
            height="80px"
          />
        </div>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {company.name}
          </h5>
          <p className="font-normal text-gray-700">{company.city}</p>
        </div>
      </div>
      <div className="my-2 h-0.5 w-full bg-black" />
      <div className="flex w-full flex-wrap justify-center">
        {company.specialties.map((specialty) => (
          <span
            key={specialty}
            className="align-center ease m-1 flex w-max rounded-full border border-gray-800 px-2 py-1 text-sm font-semibold text-gray-900 transition duration-300 active:bg-gray-300"
          >
            {specialty}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CompanyCardUI;
