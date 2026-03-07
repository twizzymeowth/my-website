import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Stega-enabled client for Visual Editing
export const liveClient = createClient({
  projectId: projectId || '',
  dataset: dataset || '',
  apiVersion,
  useCdn: false,
  stega: {
    enabled: true,
    studioUrl: '/studio',
  },
})

// Token-authenticated client for draft mode (server-side only)
export function getDraftClient() {
  const token = process.env.SANITY_API_READ_TOKEN
  if (!token || !projectId || !dataset) return null
  return liveClient.withConfig({
    token,
    perspective: 'previewDrafts',
    useCdn: false,
    stega: { enabled: true, studioUrl: '/studio' },
  })
}
