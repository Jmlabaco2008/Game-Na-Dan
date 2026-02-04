import { getDb } from "./db";
import {
  portfolioItems,
  socialLinks,
  type PortfolioItem,
  type InsertPortfolioItem,
  type SocialLink,
  type InsertSocialLink
} from "@shared/schema";

export interface IStorage {
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getSocialLinks(): Promise<SocialLink[]>;
  // Add seed methods if needed, or just insert directly in seed function
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
  createSocialLink(link: InsertSocialLink): Promise<SocialLink>;
}

export class DatabaseStorage implements IStorage {
  async getPortfolioItems(): Promise<PortfolioItem[]> {
    const db = getDb();
    return await db.select().from(portfolioItems);
  }

  async getSocialLinks(): Promise<SocialLink[]> {
    const db = getDb();
    return await db.select().from(socialLinks);
  }

  async createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem> {
    const db = getDb();
    const [newItem] = await db.insert(portfolioItems).values(item).returning();
    return newItem;
  }

  async createSocialLink(link: InsertSocialLink): Promise<SocialLink> {
    const db = getDb();
    const [newLink] = await db.insert(socialLinks).values(link).returning();
    return newLink;
  }
}

export const storage = new DatabaseStorage();
