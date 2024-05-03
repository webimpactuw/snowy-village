import {validation} from 'sanity'

export default {
  name: 'menucarouselimg',
  title: 'Menu Carousel Images (1440x800 px only)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
