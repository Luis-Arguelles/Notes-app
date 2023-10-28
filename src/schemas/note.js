const  mongoose = require('mongoose');

const noteSchema = mongoose.Schema({

    content: {
        type: String,
        required: true,
    },

    source: {

        sourceType: {
            type: String,
            enum: ['Book', 'Article', 'Magazine', 'Other'],
            required: true
        },

        title: {
            type: String,
            required: true
        },

        publicationDate: {
            type: Date
        },

        authors: {
            type: [String]
        }
    },

    date: {
        type: Date,
        required: true
    }
})