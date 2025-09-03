import { createServerFileRoute } from "@tanstack/react-start/server";

const contacts = [
  {
    id: 1,
    email: "test@test.com",
    signup_at: "2025-01-01",
  },
  {
    id: 2,
    email: "test2@test.com",
    signup_at: "2025-01-02",
  },
  {
    id: 3,
    email: "test3@test.com",
    signup_at: "2025-01-03",
  },
];

export const ServerRoute = createServerFileRoute("/api/contacts").methods({
  GET: () => {
    return Response.json(contacts);
  },
  POST: async ({ request }) => {
    const body = await request.json();
    const contact = {
      id: contacts.length + 1,
      email: body.email,
      signup_at: new Date().toISOString(),
    };
    contacts.push(contact);
    return Response.json(contact);
  },
});
