import { type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { skill } from "./skill";
import { projectType } from "./projectType";
import { skillCategory } from "./skillCategory";
import { resume } from "./resume";
import { profileImage } from "./profileImage";
import { certificates } from "./certificates";

// export const schemaTypes: SchemaTypeDefinition[] = [
//   project,
//   skill,
//   projectType,
//   skillCategory,
//   resume,
//   profileImage,
//   certificates,
// ];

export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [
    project,
    skill,
    projectType,
    skillCategory,
    resume,
    profileImage,
    certificates,
  ],
};
