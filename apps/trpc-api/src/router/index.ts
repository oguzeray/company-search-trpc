import trpc from "../trpc";
import { companyRouter } from "./company";

export const appRouter = trpc.router({
  company: companyRouter,
});

// only export *type signature* of router!
// to avoid accidentally importing your API
// into client-side code
export type AppRouter = typeof appRouter;
