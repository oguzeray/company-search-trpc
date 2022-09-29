import { z } from "zod";

export const CompanySpecialtyList = [
  "Excavation",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Tiling",
  "Foundation",
  "Painting",
  "Roof Insulation",
  "Balcony",
  "Stabilization",
  "Furnishing",
  "Elevator",
  "Debris Removal",
] as const;

export interface Company {
  name: string;
  logoUrl: string;
  specialties: Array<typeof CompanySpecialtyList[number]>;
  city: string;
}

export const companyInputSchema = z
  .object({
    count: z.number().nonnegative().optional(),
    filter: z
      .object({
        name: z.string().optional(),
        specialties: z.array(z.enum(CompanySpecialtyList)).optional(),
      })
      .optional(),
  })
  .optional();

export type CompanyInput = z.infer<typeof companyInputSchema>;
