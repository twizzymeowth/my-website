import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
    }),
    defineField({
      name: 'displayName',
      title: 'Display Name',
      type: 'string',
    }),
    defineField({
      name: 'field',
      title: 'Field',
      type: 'string',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'resumeUrl',
      title: 'Resume URL',
      type: 'url',
    }),
    defineField({
      name: 'researchPaperUrl',
      title: 'Research Paper URL',
      type: 'url',
    }),
  ],
})
