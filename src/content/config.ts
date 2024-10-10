import { defineCollection, z } from 'astro:content';

const popUpGuiaFotos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  })
});

export const collections = {
  'popUpGuiaFotos': popUpGuiaFotos,
};