import {validation, defineField, defineType } from 'sanity'

export const faqitem = defineType({
  name: 'faqitem',
  title: 'FAQ Items',
  type: 'document',

  fields: [
    
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
  ]
})

export default faqitem;