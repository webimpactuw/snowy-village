import {validation} from 'sanity'

export default {
  name: 'locationitem',
  title: 'Locations',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'days',
      title: 'Days',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'googlemapslink',
      title: 'Google Maps Link',
      type: 'string',
    },
    {
      name: 'priority',
      title: 'Priority (low = first on page)',
      type: 'number',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
