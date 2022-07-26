const express = require("express")
const router = express.Router()
const fs = require("fs")

router.delete("/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            console.log("oops!");
        } else {
            const jsonData = JSON.parse(data)
            console.log(jsonData)
            
            for (i = 0; i < jsonData.length; i++) {

                if (jsonData[i].id == req.params.id) {
                    jsonData.splice(i, 1)
                    
                    fs.writeFile("./db/db.json", JSON.stringify(jsonData), (err) => {
                        console.log("oops2!")
                    })
                } else {
                    res.status(404)
                }
            }
        }

    })
})


module.exports = router