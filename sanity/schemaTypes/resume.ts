import {defineField, defineType} from "sanity";

export const resume = defineType({
    name: 'resume',
    title : 'Resume',
    type : 'document',
    fields: [
        defineField({
            name: 'cvFr',
            title: 'CV Français',
            type: 'file',
        }),
        defineField({
            name: 'cvEn',
            title: 'CV English',
            type: 'file',
        }),
    ]
})
