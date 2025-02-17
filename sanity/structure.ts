import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('skill').title('Skills'),
            S.documentTypeListItem('skillCategory').title('SkillCategories'),
            S.documentTypeListItem('projectType').title('ProjectType'),
            S.listItem()
                .title('Resume')
                .child(
                    S.editor()
                        .id('resume')
                        .schemaType('resume')
                        .documentId('resume') // Enforces a single document with ID 'resume'
                )
                .title('Profile Image')
                .child(
                    S.editor()
                        .id('profileImage')
                        .schemaType('profileImage')
                        .documentId('profileImage') // Enforces a single document with ID 'resume'
                )
        ])
