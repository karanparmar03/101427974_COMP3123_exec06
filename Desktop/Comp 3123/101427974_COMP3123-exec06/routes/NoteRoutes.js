const express = require('express');
const router = express.Router();
const noteModel = require('../models/Notes'); // Adjust the path based on your project structure

// Create a new Note
router.post('/', (req, res) => {
    const note = new noteModel({
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateAdded: new Date(),
        dateUpdated: new Date()
    });

    note.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the note."
            });
        });
});

// Retrieve all Notes
router.get('/', (req, res) => {
    noteModel.find()
        .then(notes => res.send(notes))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
});

// Retrieve a single Note with noteId
router.get('/:noteId', (req, res) => {
    noteModel.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(note);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving note with id " + req.params.noteId
            });
        });
});

// Update a Note with noteId
router.put('/:noteId', (req, res) => {
    noteModel.findByIdAndUpdate(req.params.noteId, {
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateUpdated: new Date()
    }, { new: true })
    .then(note => {
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error updating note with id " + req.params.noteId
        });
    });
});

// Delete a Note with noteId
router.delete('/:noteId', (req, res) => {
    noteModel.findByIdAndRemove(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send({ message: "Note deleted successfully!" });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete note with id " + req.params.noteId
            });
        });
});

module.exports = router; // Export the router
