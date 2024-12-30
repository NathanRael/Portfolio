import {defineField, defineType} from "sanity";

export const skillCategory = defineType({
    name: 'skillCategory',
    title : 'SkillCategory',
    type : 'document',
    fields: [
        defineField({
            name : 'name',
            type : 'string'
        })
    ]
})