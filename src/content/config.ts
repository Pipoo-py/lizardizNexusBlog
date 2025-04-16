// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(), 
    description: z.string().max(160), // Añadimos límite para meta descripción
    tags: z.array(z.string()),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(), // La imagen de portada ahora es opcional
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(), // Mantenemos heroImage por si lo usas
    draft: z.boolean().optional(), // Añadimos soporte para borradores
  }),
});

export const collections = { blog };
