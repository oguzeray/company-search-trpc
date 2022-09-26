import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import cors from "@fastify/cors";

import { appRouter } from "./router";

const app = fastify({ maxParamLength: 5000 });

void app.register(cors, { origin: "*" });

void app.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter },
});

void (async () => {
  try {
    const address = await app.listen({ port: 5000 });
    console.log("Trpc api is running on: ", address);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
