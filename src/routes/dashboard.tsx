import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import ContactsTable from "../components/contacts-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAddContact, useContacts } from "@/queries/contacts";

export const Route = createFileRoute("/dashboard")({
  component: TanStackQueryDemo,
});

function TanStackQueryDemo() {
  const [email, setEmail] = useState("");
  const { mutate: addContact } = useAddContact();
  const { data } = useContacts();

  const submitTodo = useCallback(async () => {
    await addContact(email);
    setEmail("");
  }, [addContact, email]);

  return (
    <main>
      <div className="CONTENT w-full py-12">
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
            Add todo
          </Button>
        </div>
        <ContactsTable contacts={data} />
      </div>
    </main>
  );
}
