const express = require("express");
const app = express ();
const PORT = 7777;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello world!"));


app.listen(PORT, () => console.log(`Server run, run, running on PORT: ${PORT}!`));