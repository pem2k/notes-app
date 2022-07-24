const express = require("express");
const app = express();
const db = require("./db.json");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))