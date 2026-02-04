import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const portfolioItems = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'Gaming Content', 'Community Project', 'Creative Identity'
  imageUrl: text("image_url").notNull(),
  link: text("link"),
});

export const socialLinks = pgTable("social_links", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(), // 'Facebook', 'Discord', 'YouTube'
  url: text("url").notNull(),
  label: text("label").notNull(),
});

export const insertPortfolioItemSchema = createInsertSchema(portfolioItems);
export const insertSocialLinkSchema = createInsertSchema(socialLinks);

export type PortfolioItem = typeof portfolioItems.$inferSelect;
export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;

export type SocialLink = typeof socialLinks.$inferSelect;
export type InsertSocialLink = z.infer<typeof insertSocialLinkSchema>;
