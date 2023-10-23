const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

require('dotenv').config();

const app = express();
const port = 5000;

// middleware
app.use("/user", userRoutes);

app.get("/", (req, res) => res.send("¡Ahí la llevas, perro!"));

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas")).catch((error) => console.error(error));

app.listen(port, () => console.log(`Server listening on port ${port}`));
