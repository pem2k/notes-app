const express = require("express");
const router = express.router();

const getNotes = require("./get-controller.js")
router.use("", getNotes)

const addNotes = require("./post-controller")
router.use("", addNotes)

const delNotes = require("./delete-controller")
router.use("", delNotes)

module.exports = router;