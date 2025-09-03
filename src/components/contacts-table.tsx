import { CircleX, EllipsisVertical, Mail, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Contact = {
  id: number;
  email: string;
  signup_at: string;
  verified_at: string | null;
};

export default function ContactsTable({ contacts }: { contacts: Contact[] }) {
  return (
    <table className="w-full border-collapse border border-zinc-200 text-sm">
      <thead className="bg-zinc-100">
        <tr>
          <th className="p-4 text-left">Email</th>
          <th className="p-4 text-left">Signup at</th>
          <th className="p-4 text-left">Verified at</th>
          <th className="p-4 text-left"></th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td className="p-4">{contact.email}</td>
            <td className="p-4">
              {new Date(contact.signup_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </td>
            <td className="p-4">
              {contact.verified_at ? (
                new Date(contact.verified_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              ) : (
                <>
                  <CircleX className="size-4 inline text-red-300 -translate-y-px mr-2" />
                  <span className="text-zinc-500">Not verified</span>
                </>
              )}
            </td>
            <td className="p-4 text-right">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline" size="icon">
                    <EllipsisVertical className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Mail className="size-4" />
                    Send test email
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash2 className="size-4" />
                    Delete contact
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
