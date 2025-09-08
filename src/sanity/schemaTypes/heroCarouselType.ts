import { defineField, defineType } from "sanity";

export const heroCarouselType = defineType({
  name: "heroCarousel",
  title: "Hero Carousel",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
