import { Company } from "../utils/types";

interface CompanyCardUIProps {
  company: Company;
}

const CompanyCardUI = ({ company }: CompanyCardUIProps) => {
  return (
    <div className="w-full mx-auto rounded-lg border border-gray-200 shadow-md bg-gray-200 hover:bg-gray-500 p-6 m-2">
      <div className="flex">
        <div className="mr-2">
          <img
            alt={`${company}-logo`}
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
      <div className="w-full h-0.5 my-2 bg-black" />
      <div className="flex w-full flex-wrap justify-center">
        {company.specialties.map((specialty) => (
          <span
            key={specialty}
            className="m-1 px-2 py-1 rounded-full border border-gray-800 text-gray-900 font-semibold text-sm flex align-center w-max active:bg-gray-300 transition duration-300 ease"
          >
            {specialty}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CompanyCardUI;
