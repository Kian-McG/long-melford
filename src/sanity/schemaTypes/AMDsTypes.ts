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
    defineField({
      name: "type",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Agenda", value: "agenda" },
          { title: "Minutes", value: "minutes" },
          { title: "Dates", value: "dates" },
        ],
      },
    }),
    defineField({
      name: "date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "file",
      type: "file",
      validation: (rule) => rule.required(),
    }),
  ],
});
