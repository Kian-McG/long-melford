import { defineField, defineType } from "sanity";

export const AMDsType = defineType({
  name: "AMDs",
  title: "AMDs",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
