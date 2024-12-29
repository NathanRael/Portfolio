import {defineField, defineType} from "sanity";
export const projectType = defineType({
    name : 'projectType',
    title : 'ProjectType',
    type : 'document',
    fields : [
        defineField({
            name : 'name',
            type : 'string',
        }),
        defineField({
            name : 'display',
            type : 'string',
        })
    ]
})