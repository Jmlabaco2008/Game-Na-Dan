import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.portfolio.list.path, async (_req, res) => {
    const items = await storage.getPortfolioItems();
    res.json(items);
  });

  app.get(api.socials.list.path, async (_req, res) => {
    const links = await storage.getSocialLinks();
    res.json(links);
  });

  return httpServer;
}

export async function seedDatabase() {
  const existingItems = await storage.getPortfolioItems();
  if (existingItems.length === 0) {
    await storage.createPortfolioItem({
      title: "Epic Gaming Highlights",
      description: "Best moments from recent streams and tournaments.",
      category: "Gaming Content",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000",
      link: "#"
    });
    await storage.createPortfolioItem({
      title: "Community Game Night",
      description: "Weekly gatherings with the Game Na Dan community.",
      category: "Community Project",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1000",
      link: "#"
    });
     await storage.createPortfolioItem({
      title: "Brand Identity Design",
      description: "The visual journey of the Game Na Dan brand.",
      category: "Creative Identity",
      imageUrl: "https://images.unsplash.com/photo-1561112079-2c3226d9c559?auto=format&fit=crop&q=80&w=1000",
      link: "#"
    });
  }

  const existingSocials = await storage.getSocialLinks();
  if (existingSocials.length === 0) {
    await storage.createSocialLink({
      platform: "Facebook",
      url: "https://www.facebook.com/share/16syorLvex/",
      label: "Follow us on Facebook"
    });
    await storage.createSocialLink({
      platform: "Discord",
      url: "https://discord.com/invite/XmxuAKHpz3",
      label: "Join our Community"
    });
    await storage.createSocialLink({
      platform: "YouTube",
      url: "https://youtube.com/@gamenadanofficialyt",
      label: "Subscribe for Content"
    });
  }
}
