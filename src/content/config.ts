import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
		schema: z.object({
			title: z.string(),
			type: z.string(),
			featuredImgs: z.string().optional(),
			draft: z.boolean(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	});

export const collections = {
	work: workCollection,
};
