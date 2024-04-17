export default {
  name: 'menuitem',
  title: 'Menu Item',
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
