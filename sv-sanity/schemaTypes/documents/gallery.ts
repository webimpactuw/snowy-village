export default {
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
      {
        name: 'src',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'alt',
        title: 'Alternative Text',
        type: 'string',
      },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
      },
      {
        name: 'contentType',
        title: 'Content Type',
        type: 'string',
        options: {
          list: [
            { title: 'Featured', value: 'featured' },
          ],
          layout: 'radio'
        }
      }
    ]
  };
  