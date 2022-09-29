import { faker } from "@faker-js/faker/locale/de";
import * as fs from "fs";

enum Specialties {
  "Excavation" = "Excavation",
  "Plumbing" = "Plumbing",
  "Electrical" = "Electrical",
  "Roofing" = "Roofing",
  "Tiling" = "Tiling",
  "Foundation" = "Foundation",
  "Painting" = "Painting",
  "Roof Insulation" = "Roof Insulation",
  "Balcony" = "Balcony",
  "Stabilization" = "Stabilization",
  "Furnishing" = "Furnishing",
  "Elevator" = "Elevator",
  "Debris Removal" = "Debris Removal",
}

interface Company {
  name: string;
  logoUrl: string;
  specialties: Specialties[];
  city: string;
}

const specialtyList = Object.values(Specialties);

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCompanies() {
  const companies: Company[] = [];

  for (let i = 0; i < 2000; i++) {
    companies.push({
      name: faker.company.name(),
      city: faker.address.city(),
      logoUrl: "https://placekitten.com/80/80",
      specialties: [
        ...new Set(
          Array.from(
            { length: getRandomInt(1, specialtyList.length - 1) },
            () => specialtyList[getRandomInt(0, specialtyList.length - 1)]
          )
        ),
      ],
    });
  }

  fs.writeFileSync("src/company/company-data.json", JSON.stringify(companies));
}

generateCompanies();
