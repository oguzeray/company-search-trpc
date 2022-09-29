import trpc from "../../trpc";
import {
  companyInputSchema,
  CompanySpecialtyList,
} from "../../company/interface";
import { getCompaniesResolver } from "../../company/resolver";

export const companyRouter = trpc.router({
  getCompanies: trpc.procedure
    .input(companyInputSchema)
    .query(getCompaniesResolver),
  getCompanySpecialties: trpc.procedure.query(() => CompanySpecialtyList),
});
