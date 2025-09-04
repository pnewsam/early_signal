import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function ContactsHeader() {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <Avatar className="size-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="">
          <h1 className="text-2xl font-bold">Firstname Lastname</h1>
          <p className="text-lg text-zinc-500">Welcome back to Early Signal.</p>
        </div>
      </div>
    </div>
  );
}
