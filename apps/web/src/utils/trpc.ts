import { createTRPCReact } from "@trpc/react";
import type { AppRouter } from "@monorepo/trpc-api";

export const trpc = createTRPCReact<AppRouter>();
