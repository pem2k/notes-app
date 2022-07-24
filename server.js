const express = require("express");
const app = express();
const db = require("./db/db.json");
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
  });

app.listen(PORT, () =>{
    console.log(`Listening for note requests on ${PORT}`)
})