import trpc from "../../trpc";
import { z } from "zod";

const companyInput = z.object({
  name: z.string(),
  surname: z.string(),
  school: z.object({ name: z.string(), year: z.number() }),
});
const resolver = ({ input }: { input: z.infer<typeof companyInput> }) => {
  return input.name + input.surname;
};

export const companyRouter = trpc.router({
  getCompanies: trpc.procedure.input(companyInput).query(resolver),
});
