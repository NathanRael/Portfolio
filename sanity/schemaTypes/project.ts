import {defineField, defineType} from "sanity";

export const project = defineType({
    name: "project",
    title : "Project",
    type : 'document',
    fields : [
        defineField({
            name: 'id',
            type: 'string',
        }),
        defineField({
            name : 'title',
            type : 'string',
        }),
        defineField({
            name : 'description',
            type : 'string',
        }),
        defineField({
            name : 'image',
            type : 'image',
        }),
        defineField({
            name : 'links',
            type : 'array',
            of : [{type : 'string'}]
        }),
        defineField({
            name : 'techStacks',
            type : 'array',
            of : [{type : 'string'}]
        }),
        defineField({
            name : 'type',
            type : 'reference',
            to : [{type : 'projectType'}]
        })
    ]
})


