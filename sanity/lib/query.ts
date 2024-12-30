import {defineQuery} from "next-sanity";

export const PROJECT_QUERY = defineQuery(`
 *[_type =="project"]{
  _id,
  id,
    name,
  techStacks,
    description,
    "image" : image.asset->url,
    links,
    projectType -> {
      name, display
    }
}`)
export const PROJECT_QUERY_WITH_FILTER = defineQuery(`
 *[_type =="project" && projectType->name == $filter  ]{
  _id,
  id,
    name,
  techStacks,
    description,
    "image" : image.asset->url,
    links,
    projectType -> {
      name, display
    }
}`)


