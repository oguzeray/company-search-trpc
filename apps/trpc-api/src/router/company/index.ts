import trpc from "../../trpc";
import { z } from "zod";

export const companyRouter = trpc.router({
  getCompanies: trpc.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return input.name;
    }),
});
