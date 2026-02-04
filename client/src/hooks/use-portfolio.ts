import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function usePortfolio() {
  return useQuery({
    queryKey: [api.portfolio.list.path],
    queryFn: async () => {
      const res = await fetch(api.portfolio.list.path);
      if (!res.ok) throw new Error("Failed to fetch portfolio items");
      return api.portfolio.list.responses[200].parse(await res.json());
    },
  });
}

export function usePortfolioItem(id: number) {
  return useQuery({
    queryKey: [api.portfolio.get.path, id],
    queryFn: async () => {
      const res = await fetch(api.portfolio.get.path.replace(":id", id.toString()));
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch portfolio item");
      return api.portfolio.get.responses[200].parse(await res.json());
    },
  });
}
