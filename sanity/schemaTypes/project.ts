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
            name : 'name',
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
            of : [
                {
                    type : 'reference',
                    to : [{type : 'skill'}]
                },
            ]
        }),
        defineField({
            name : 'projectType',
            type : 'reference',
            to : [{type : 'projectType'}]
        })
    ]
})


