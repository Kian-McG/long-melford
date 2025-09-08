import {defineField, defineType} from 'sanity'

export const newsStoryType = defineType({
  name: 'newsStory',
  title: 'News Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})

import type { PortableTextBlock } from '@portabletext/types';

export interface TNewsStory {
  _id: string;
  title: string;
  body: PortableTextBlock[];
  mainImage?: any;
  slug: { current: string };
  publishedAt?: string;
}
