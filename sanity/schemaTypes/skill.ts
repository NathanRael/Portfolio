import {defineField, defineType} from "sanity";

export const skill = defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            type: 'string',
        }),
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'url',
        })
    ]
})