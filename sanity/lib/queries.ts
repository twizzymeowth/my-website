import { liveClient, getDraftClient } from './live-client'

export interface HeroSectionData {
  fullName: string
  bio: string
  email: string
  phone: string
}

export interface SiteSettingsData {
  initials: string
  displayName: string
  field: string
  footerText: string
  seoTitle: string
  seoDescription: string
  githubUrl: string
  linkedinUrl: string
  resumeUrl: string
  researchPaperUrl: string
}

export interface SectionItemData {
  _id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  link?: string
  category: 'academics' | 'cyberClinic' | 'skills'
  order: number
}

function createSafeClient(useDraft = false) {
  if (useDraft) {
    return getDraftClient()
  }
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  if (!projectId || !dataset) return null
  return liveClient
}

async function safeFetch<T>(
  query: string,
  params?: Record<string, string>,
  useDraft = false,
): Promise<T | null> {
  try {
    const client = createSafeClient(useDraft)
    if (!client) return null
    if (params) {
      return await client.fetch<T>(query, params)
    }
    return await client.fetch<T>(query)
  } catch {
    return null
  }
}

export async function getHeroSection(draft = false): Promise<HeroSectionData | null> {
  return safeFetch<HeroSectionData>(
    `*[_type == "heroSection" && _id == "heroSection"][0]{fullName,bio,email,phone}`,
    undefined,
    draft,
  )
}

export async function getSiteSettings(draft = false): Promise<SiteSettingsData | null> {
  return safeFetch<SiteSettingsData>(
    `*[_type == "siteSettings" && _id == "siteSettings"][0]{initials,displayName,field,footerText,seoTitle,seoDescription,githubUrl,linkedinUrl,resumeUrl,researchPaperUrl}`,
    undefined,
    draft,
  )
}

export async function getSectionItemsByCategory(
  category: 'academics' | 'cyberClinic' | 'skills',
  draft = false,
): Promise<SectionItemData[]> {
  const result = await safeFetch<SectionItemData[]>(
    `*[_type == "sectionItem" && category == $category] | order(order asc){_id,title,subtitle,description,tags,link,category,order}`,
    { category },
    draft,
  )
  return result ?? []
}
