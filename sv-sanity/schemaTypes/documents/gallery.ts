export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [{
        title: 'image src',
        name: 'src',
        type: 'string',
        validation: rule => rule.required()
    }

    ]
}