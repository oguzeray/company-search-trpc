import trpc from "../../trpc";
import { z } from "zod";

export const companyRouter = trpc.router({
  getCompanies: trpc.procedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      return await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(input.name);
        }, 4000);
      });
    }),
});
