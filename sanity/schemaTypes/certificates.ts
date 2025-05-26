import { defineField, defineType } from "sanity";

export const certificates = defineType({
  name: "certificate",
  title: "Certificate",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "file",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
  ],
});
