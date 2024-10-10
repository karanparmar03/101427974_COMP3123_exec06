const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'],
        default: 'MEDIUM'
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
