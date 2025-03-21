import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
.title('Content')
.items([
    S.documentTypeListItem('project').title('Projects'),
    S.documentTypeListItem('skill').title('Skills'),
    S.documentTypeListItem('skillCategory').title('Skill Categories'),
    S.documentTypeListItem('projectType').title('Project Types'),
    S.listItem()
        .title('Resume')
        .child(
            S.document()
                .id('resume') 
                .schemaType('resume')
        ),
    S.listItem()
        .title('Profile Image')
        .child(
            S.document()
                .id('profileImage') 
                .schemaType('profileImage')
        ),
]);