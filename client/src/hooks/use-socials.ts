import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useSocials() {
  return useQuery({
    queryKey: [api.socials.list.path],
    queryFn: async () => {
      const res = await fetch(api.socials.list.path);
      if (!res.ok) throw new Error("Failed to fetch social links");
      return api.socials.list.responses[200].parse(await res.json());
    },
  });
}
