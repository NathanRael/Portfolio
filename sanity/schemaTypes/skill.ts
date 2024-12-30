import {defineField, defineType, Rule} from "sanity";

export const skill = defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            // validation :( rule : Rule) => rule.required().unique()
        }),
        defineField({
            name: 'image',
            type: 'url',
        }),
        defineField({
            name : 'experimented',
            type: 'boolean',
        }),
        defineField({
            name : 'category',
            type : 'reference',
            to : [
                {type : 'skillCategory'}
            ]
        })
    ]
})