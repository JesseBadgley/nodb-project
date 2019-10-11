const express = require("express");
const {addItem,showItem, deleteItem} = require("./shopuController.js")
const app = express ();
const PORT = 7777;

app.use(express.json());

// app.get("/", (req, res) => res.send("Hello world!"));

app.post("/api/shopu",addItem);

app.get("/api/shopu",showItem);

app.delete("/api/shopu", deleteItem);


app.listen(PORT, () => console.log(`Server run, run, running on PORT: ${PORT}!`));