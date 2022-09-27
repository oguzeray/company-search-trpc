import fastify from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { appRouter } from "./router";

describe("aaa", () => {
  const app = fastify();

  beforeAll(async () => {
    await app.register(fastifyTRPCPlugin, {
      prefix: "/trpc",
      trpcOptions: { router: appRouter },
    });
    await app.ready();
  });

  afterAll(async () => await app.close());

  it("should", async () => {
    const response = await app.inject({
      url: "/trpc/company.getCompanies?batch=1&input=%7B%220%22%3A%7B%22name%22%3A%22asdasdqsda%22%7D%7D",
    });
    console.log(response.body);
  });
});
