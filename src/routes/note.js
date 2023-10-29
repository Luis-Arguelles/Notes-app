const express = require('express');
const router = express.Router();
const Note = require('../schemas/note');


router.get('/', (req, res) => {

    Note
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({message: error}));

});


router.post("/create", (req, res) => {

    const note = Note(req.body);

    note
        .save()
        .then(data => res.send(data))
        .catch(error => res.json({message: error}));

});


module.exports = router;