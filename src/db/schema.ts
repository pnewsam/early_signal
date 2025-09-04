import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const contactsTable = pgTable("contacts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  signup_at: timestamp("signup_at").notNull(),
  verified_at: timestamp("verified_at"),
});
