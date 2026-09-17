import { defineQuery } from "next-sanity";

export const PROJECT_QUERY = defineQuery(`
 *[_type =="project" ] | order(date desc){
  _id,
  id,
  name,
  description,
  problem,
  solution,
  impact,
  "image": image.asset->url,
  links,
  projectType->{
    name,
    display
  },
  "techStacks": techStacks[]->image,
  date,
  archived,
  isUnderDevelopment,
  isFeatured
}`);
export const PROJECT_LINKS_QUERY = defineQuery(`
 *[_type == "project" && defined(links) && count(links) > 0] | order(date desc){
   _id,
   name,
   links
 }
`);
export const SKILL_QUERY = defineQuery(`
  *[_type=="skill"]{
    _id,
    name,
    image,
    "category": category->name
  }
`);

export const RESUME_QUERY = defineQuery(`
*[_id == "resume"] {
  "cvFrUrl": cvFr.asset->url,
  "cvEnUrl": cvEn.asset->url
}[0]
`);

export const PROFILE_IMAGE_QUERY = defineQuery(`
*[_id=="profileImage"]{
    "url": asset->url
}[0]
`);

export const CERTIFICATES_QUERY = defineQuery(`
*[_type=="certificate"]{
    _id, title, "image" : image.asset->url
}
`);
