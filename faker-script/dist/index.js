import { companies } from "./db/schema.js";
import pkg from "pg";
const { Pool } = pkg;
import { drizzle } from "drizzle-orm/node-postgres";
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "directus",
  password: "directus",
  database: "directus",
});
const db = drizzle(pool);
const auxcube = {
  name: "Auxcube",
  email: "connect@auxcube.com",
  phone: "+92 334 7111 332",
  service: "We Build Technology",
  website: "https://auxcube.com/",
  address: "1B, Maple Homes, Banni Gala, Islamabad",
  countryId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
};
await db.insert(companies).values(auxcube);
//# sourceMappingURL=index.js.map
