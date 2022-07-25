const express = require("express");
const app = express()
const router = express.Router();

const getNotes = require("./get-controller.js")
router.use("/notes", getNotes)

const addNotes = require("./post-controller")
router.use("/notes", addNotes)
/*
const delNotes = require("./delete-controller")
router.use("/notes/:title", delNotes)
*/
module.exports = router;