import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    stack: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    link: z.string().optional(),
    img: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
