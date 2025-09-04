import db from ".";
import * as schema from "./schema";

export const getContacts = async () => {
  const contacts = await db.select().from(schema.contactsTable);
  return contacts;
};
