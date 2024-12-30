import {defineQuery} from "next-sanity";

export const PROJECT_QUERY = defineQuery(`
 *[_type =="project"]{
  _id,
  id,
    name,
    description,
    "image" : image.asset->url,
    links,
    projectType -> {
      name, display
    },
     "techStacks": techStacks[]->image
}`)
export const SKILL_QUERY = defineQuery(`
    *[_type=="skill"]{
        _id, name, image, experimented,
        "category" : category->name
    }
`)

