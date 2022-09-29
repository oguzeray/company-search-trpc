import { inferProcedureOutput } from "@trpc/server";
import { AppRouter } from "@monorepo/trpc-api";

export type Specialty = inferProcedureOutput<
  AppRouter["company"]["getCompanySpecialties"]
>[number];

export type Company = inferProcedureOutput<
  AppRouter["company"]["getCompanies"]
>[number];
