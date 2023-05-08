import { faker } from "@faker-js/faker";
import { InferModel } from "drizzle-orm";
import { companies, countries, people } from "./db/schema.js";
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Pool } = pkg;

type NewCountry = InferModel<typeof countries, "insert">;
type NewCompany = InferModel<typeof companies, "insert">;
type NewPeople = InferModel<typeof people, "insert">;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "directus",
  password: "directus",
  database: "directus",
});

const db = drizzle(pool);

// const allCountries: NewCountry[] = [];
// for (let i = 0; i < 195; i++) {
//   const country: NewCountry = {
//     name: faker.address.country(),
//   };
//   allCountries.push(country);
// }
// await db.insert(countries).values(allCountries);

// const countryIds = (await db.select({ id: countries.id }).from(countries)).map(
//   (c) => c.id
// );

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

// for (let i = 0; i < 100; i++) {
//   const allCompanies: NewCompany[] = [];
//   for (let j = 0; j < 1000; j++) {
//     const company: NewCompany = {
//       name: faker.company.name(),
//       email: faker.internet.email(),
//       phone: faker.phone.number("+## ### #### ###"),
//       service: faker.company.bs(),
//       website: faker.internet.url(),
//       address: faker.address.streetAddress(),
//       countryId: getRandomInt(195),
//     };
//     allCompanies.push(company);
//   }
//   await db.insert(companies).values(allCompanies);
//   console.log("Done", i + 1);
// }

for (let i = 0; i < 1000; i++) {
  const allPeople: NewPeople[] = [];
  for (let j = 0; j < 1000; j++) {
    const people: NewPeople = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number("+## ### #### ###"),
      address: faker.address.streetAddress(),
      companyId: getRandomInt(100000),
      postalCode: parseInt(faker.address.zipCode("#####")),
      birthDate: faker.date.birthdate(),
      joiningDate: faker.date.between(
        "2020-01-01T00:00:00.000Z",
        "2030-01-01T00:00:00.000Z"
      ),
      cityOfBirth: faker.address.city(),
      placeOfBith: faker.address.streetAddress(),
      nid: faker.random.numeric(13),
      iban: faker.finance.iban(true),
    };
    allPeople.push(people);
  }
  await db.insert(people).values(allPeople);
  console.log("Done", i + 1);
}
