const express = require("express");
const {addItem,showItem, deleteItem, update, } = require("./shopuController.js")
const app = express ();
const PORT = 7777;

app.use(express.json());

// app.get("/", (req, res) => res.send("Hello world!"));

app.post("/api/brewu",addItem);

app.get("/api/brewu",showItem);

app.delete("/api/brewu", deleteItem);

app.put("/api/brewu/:id", update);




app.listen(PORT, () => console.log(`Server run, run, running on PORT: ${PORT}!`));