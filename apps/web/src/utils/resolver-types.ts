import type { inferProcedureInput, inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@monorepo/trpc-api";

export type Specialty = inferProcedureOutput<
  AppRouter["company"]["getCompanySpecialties"]
>[number];

export type Company = inferProcedureOutput<
  AppRouter["company"]["getCompanies"]
>[number];

export type FilterCompanyInput = inferProcedureInput<
  AppRouter["company"]["getCompanies"]
>;
