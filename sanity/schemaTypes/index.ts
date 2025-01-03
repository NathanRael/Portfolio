import { type SchemaTypeDefinition } from 'sanity'
import {project} from "@/sanity/schemaTypes/project";
import {skill} from "@/sanity/schemaTypes/skill";
import {projectType} from "@/sanity/schemaTypes/projectType";
import {skillCategory} from "@/sanity/schemaTypes/skillCategory";
import {resume} from "@/sanity/schemaTypes/resume";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, skill, projectType, skillCategory, resume],
}
