const { randomUUID } = require("crypto");
const express = require("express")
const router = express.Router()
const fs = require("fs")

let dataArr;

router.post("/", (req,res) =>{
    const newNote = {
        id: randomUUID(),
        title: req.body.title,
        text: req.body.text
    }
    fs.readFile( "./db/db.json", "utf-8", (err, data) => {
       dataArr = JSON.parse(data)
       dataArr.push(newNote) 
       fs.writeFile("./db/db.json", JSON.stringify(dataArr, null, 4), (err, data) =>{
        if(err){
            throw err
        }else{
            res.json({ data: req.body, message: "success!" });
        }
       })
    })
})


module.exports = router