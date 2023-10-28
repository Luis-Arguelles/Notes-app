const express = require('express');
const router = express.Router();
const userSchema = require('../schemas/user')

router.post("/create", (req, res) => {

    const user = userSchema(req.body);

    user
        .save()
        .then(data => res.json(data))
        .catch(error => res.json({message: error}));
});


router.get("/", (req, res) => {

    userSchema
        .find()
        .then(data => res.json(data))
        .catch(error => res.json({message: error}))
});


module.exports = router;
