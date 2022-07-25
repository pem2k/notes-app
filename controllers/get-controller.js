const express = require("express")
const router = express.Router()
const fs = require("fs")

router.get("/", (req, res) => {
    fs.readFile( "./db/db.json", "utf-8", (err, data) => {
        if(err){
            console.log("oops!");
        }else{
            const jsonData = JSON.parse(data)
            res.json(jsonData)
        }
    })
})

module.exports = router