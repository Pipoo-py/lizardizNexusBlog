
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(), 
    description: z.string().max(160), 
    tags: z.array(z.string()),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(), 
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(), 
    draft: z.boolean().optional(), 
  }),
});

export const collections = { blog };
