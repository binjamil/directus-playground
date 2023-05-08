import { pgTable, serial, integer, uniqueIndex, varchar, timestamp, } from "drizzle-orm/pg-core";
export const countries = pgTable("countries", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
}, (countries) => {
    return {
        nameIndex: uniqueIndex("name_idx").on(countries.name),
    };
});
export const companies = pgTable("companies", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    email: varchar("email", { length: 256 }),
    website: varchar("website", { length: 256 }),
    service: varchar("service", { length: 256 }),
    address: varchar("address", { length: 256 }),
    phone: varchar("phone", { length: 256 }),
    countryId: integer("country_id").references(() => countries.id),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
});
//# sourceMappingURL=schema.js.map