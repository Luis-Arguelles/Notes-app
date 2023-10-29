const  mongoose = require('mongoose');

const noteSchema = mongoose.Schema({

    content: {
        type: String,
        required: true,
    },

    source: {

        sourceType: {
            type: String,
            enum: ['Book', 'Article', 'Magazine', 'Journal', 'Reflection', 'Poetry/Rhymes', 'Other'],
            required: true
        },

        title: {
            type: String
        },

        publicationDate: {
            type: Date
        },

        authors: {
            type: [String]
        }
    },

    noteDate: {
        type: Date,
        required: true
    }
})


module.exports = mongoose.model("Note", noteSchema);