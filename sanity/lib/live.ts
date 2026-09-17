// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from './client'
import { cacheRevalidate, serverReadToken } from "@/sanity/env";



export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: 'vX'
  }),
  serverToken: serverReadToken,
  browserToken: false,
  fetchOptions: {
    revalidate: cacheRevalidate || 3600,
  }
});
