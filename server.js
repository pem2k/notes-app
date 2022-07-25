const express = require("express");
const app = express();
const api = require("./controllers/index.js");
const path = require("path");
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api', api);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
  });

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(PORT, () =>{
    console.log(`Listening for note requests on ${PORT}`)
})