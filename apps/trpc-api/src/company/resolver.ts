import { Company, CompanyInput } from "./interface";
import * as fs from "fs/promises";
import * as path from "path";
import { CompanyFilter } from "./filter";

const readAllCompanies = async () => {
  const rawCompanyDataBuffer = await fs.readFile(
    path.resolve(__dirname, "company-data.json")
  );

  return await new Promise<Company[]>((resolve, reject) => {
    try {
      const companies = JSON.parse(
        rawCompanyDataBuffer.toString()
      ) as Company[];

      resolve(companies);
    } catch (err) {
      reject(err);
    }
  });
};

type NonNegativeInteger<T extends number> = `${T}` extends
  | `-${string}`
  | `${string}.${string}`
  ? never
  : T;

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomSliceFromCompanies = <T extends number>(
  companies: Company[],
  count: NonNegativeInteger<T>
) => {
  const randomSliceStartIndex = getRandomInt(0, companies.length - count - 1);

  return companies.slice(randomSliceStartIndex, randomSliceStartIndex + count);
};

interface GetCompaniesResolverProps {
  input: CompanyInput;
}

export const getCompaniesResolver = async ({
  input,
}: GetCompaniesResolverProps) => {
  const count = input?.count ?? 15;
  const nameSearchText = input?.filter?.name;
  const specialtyFilter = input?.filter?.specialties;

  const companies = await readAllCompanies();

  if (!specialtyFilter && !nameSearchText) {
    return getRandomSliceFromCompanies(companies, count);
  }

  const companyFilter = new CompanyFilter(companies);
  nameSearchText && companyFilter.applyNameFilter(nameSearchText);

  specialtyFilter?.forEach((specialty) =>
    companyFilter.applySpecialtyFilter(specialty)
  );

  return companyFilter.getFilteredCompanies(count);
};
