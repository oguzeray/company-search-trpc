import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import cors from "@fastify/cors";

import { appRouter } from "./router";

const app = fastify({ maxParamLength: 5000 });

async function bootstrap(): Promise<void> {
  try {
    await app.register(cors, { origin: "*" });

    await app.register(fastifyTRPCPlugin, {
      prefix: "/trpc",
      trpcOptions: { router: appRouter },
    });

    const address = await app.listen({ port: 5000 });
    console.log("Trpc api is running on: ", address);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

void bootstrap();
