import {validation} from 'sanity'

export default {
  name: 'faqitem',
  title: 'FAQs',
  type: 'document',

  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ]
}