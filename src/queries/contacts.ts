import { useMutation, useQuery } from "@tanstack/react-query";

type Email = {
  id: number;
  email: string;
  signup_at: string;
  verified_at: string | null;
};

export const useContacts = () =>
  useQuery<Email[]>({
    queryKey: ["contacts"],
    queryFn: () => fetch("/api/contacts").then((res) => res.json()),
    initialData: [],
  });

export const useAddContact = () =>
  useMutation({
    mutationFn: (email: string) =>
      fetch("/api/contacts", {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
      }).then((res) => res.json()),
    onSuccess: () => useContacts().refetch(),
  });
