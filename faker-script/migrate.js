import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgres://directus:directus@localhost:5432/directus",
});
const db = drizzle(pool);

// this will automatically run needed migrations on the database
await migrate(db, { migrationsFolder: "./migrations" });
