import { z } from 'zod';
import { insertPortfolioItemSchema, insertSocialLinkSchema, portfolioItems, socialLinks } from './schema';

export const api = {
  portfolio: {
    list: {
      method: 'GET' as const,
      path: '/api/portfolio',
      responses: {
        200: z.array(z.custom<typeof portfolioItems.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/portfolio/:id',
      responses: {
        200: z.custom<typeof portfolioItems.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
  },
  socials: {
    list: {
      method: 'GET' as const,
      path: '/api/socials',
      responses: {
        200: z.array(z.custom<typeof socialLinks.$inferSelect>()),
      },
    },
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
