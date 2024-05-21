import {validation} from 'sanity'

export default {
  name: 'menuitem',
  title: 'Menu Items',
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
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Bingsoo: Fruits', value: 'bingsoofruits'},
          {title: 'Bingsoo: Classics', value: 'bingsooclassics'},
          {title: 'Taiyaki: Sweet', value: 'taiyakisweet'},
          {title: 'Taiyaki: Savory', value: 'taiyakisavory'},
          {title: 'Drinks', value: 'drinks'},
          {title: 'Add-ons', value: 'addons'},
        ],
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'isPopular',
      title: 'Popular',
      type: 'boolean',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'containsNuts',
      title: 'Contains Nuts',
      type: 'boolean',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
