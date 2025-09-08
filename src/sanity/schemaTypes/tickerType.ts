import { defineField, defineType } from "sanity";

export const tickerType = defineType({
  name: "tickers",
  title: "Tickers",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
