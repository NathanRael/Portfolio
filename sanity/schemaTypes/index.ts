import { type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { skill } from "./skill";
import { projectType } from "./projectType";
import { skillCategory } from "./skillCategory";
import { resume } from "./resume";
import { profileImage } from "./profileImage";

export const schemaTypes: SchemaTypeDefinition[] = [
  project,
  skill,
  projectType,
  skillCategory,
  resume,
  profileImage,
];

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [project, skill, projectType, skillCategory, resume, profileImage],
// }
