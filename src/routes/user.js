const express = require('express');
const router = express.Router();
const User = require('../schemas/user')

router.post("/create", (req, res) => {

    const user = User(req.body);

    user
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({message: error}));
});


router.get("/", (req, res) => {

    User
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({message: error}))
});


module.exports = router;
