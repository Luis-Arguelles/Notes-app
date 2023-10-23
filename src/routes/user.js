const express = require('express');
const router = express.Router();

router.post("/create", (req, res) => res.send("Create user"));
router.get("/", (req, res) => res.send("Users list"));


module.exports = router;
