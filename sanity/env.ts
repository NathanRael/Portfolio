export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-29'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
    process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    'Missing permission token variable : SANITY_API_TOKEN'
);

export const serverReadToken = assertValue(
  process.env.SANITY_SERVER_READ_TOKEN,
  "Missing environement variable : SANITY_SERVER_READ_TOKEN"
)

export const cacheRevalidate : number = Number(process.env.NEXT_PUBLIC_CACHE_REVALIDATE)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}
