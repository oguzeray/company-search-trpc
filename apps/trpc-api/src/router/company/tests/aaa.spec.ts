import fs from "fs/promises";
import { createInputFromObject } from "./helper";
import fastify from "fastify";
import { appRouter } from "../../index";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { Company, CompanyInput } from "../../../company/interface";

describe("company resolver", () => {
  const app = fastify();

  beforeAll(async () => {
    await app.register(fastifyTRPCPlugin, {
      prefix: "/trpc",
      trpcOptions: { router: appRouter },
    });
    await app.ready();
  });

  afterAll(async () => await app.close());

  it("should return the list of specialties", async () => {
    const mockCompanyList: Company[] = [
      {
        name: "mock name",
        city: "mock city",
        logoUrl: "mock url",
        specialties: ["Balcony", "Debris Removal"],
      },
      {
        name: "mock name 2",
        city: "mock city 2",
        logoUrl: "mock url 2",
        specialties: ["Balcony", "Debris Removal"],
      },
    ];

    jest
      .spyOn(fs, "readFile")
      .mockImplementation(async () =>
        Buffer.from(JSON.stringify(mockCompanyList))
      );

    const input: CompanyInput = {
      count: 2,
    };

    const response = (await app.inject({
      url: createInputFromObject("company.getCompanies", input),
    })) as any;

    expect(response.body).toBeDefined();
  });
});
