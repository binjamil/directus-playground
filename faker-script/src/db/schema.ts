import {
  pgTable,
  serial,
  integer,
  uniqueIndex,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

export const countries = pgTable(
  "countries",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  }
  // (countries) => {
  //   return {
  //     nameIndex: uniqueIndex("name_idx").on(countries.name),
  //   };
  // }
);

export const companies = pgTable("companies", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  website: varchar("website", { length: 256 }).notNull(),
  service: varchar("service", { length: 256 }).notNull(),
  address: varchar("address", { length: 256 }).notNull(),
  countryId: integer("country_id")
    .references(() => countries.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const people = pgTable("people", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 256 }).notNull(),
  lastName: varchar("last_name", { length: 256 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  address: varchar("address", { length: 256 }).notNull(),
  postalCode: integer("postalCode").notNull(),
  birthDate: timestamp("birth_date").notNull(),
  joiningDate: timestamp("joining_date").notNull(),
  cityOfBirth: varchar("city_of_birth", { length: 256 }).notNull(),
  placeOfBith: varchar("place_of_birth", { length: 256 }).notNull(),
  nid: varchar("nid", { length: 256 }).notNull(),
  iban: varchar("iban", { length: 256 }).notNull(),
  companyId: integer("company_id")
    .references(() => companies.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
