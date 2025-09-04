import { useCallback, useState } from "react";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import ContactsTable from "../components/contacts-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAddContact } from "@/queries/contacts";
import ContactsHeader from "@/components/contacts-header";
import { Plus } from "lucide-react";
import { getContacts } from "@/db/queries";

export const Route = createFileRoute("/dashboard")({
  component: TanStackQueryDemo,
  loader: async () => {
    const contacts = await getContacts();
    return { contacts };
  },
});

function TanStackQueryDemo() {
  const [email, setEmail] = useState("");
  const { mutate: addContact } = useAddContact();

  const { contacts } = useLoaderData({ from: Route.id });

  const submitTodo = useCallback(async () => {
    await addContact(email);
    setEmail("");
  }, [addContact, email]);

  return (
    <main>
      <div className="CONTENT w-full py-12">
        <ContactsHeader />
        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitTodo();
              }
            }}
            placeholder="Add an email manually..."
            className="w-full"
          />
          <Button
            disabled={email.trim().length === 0}
            onClick={submitTodo}
            variant="default"
          >
            <Plus className="size-4" />
            Add email
          </Button>
        </div>
        <ContactsTable contacts={contacts} />
      </div>
    </main>
  );
}
