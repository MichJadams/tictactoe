const express = require('express')
const bodyparser = require('body-parser')
const Path = require('path')

let app = express()

app.use(bodyparser.urlencoded({extended:true}))

// app.use(express.static(Path.join(__dirname, "../client/index.html")))

app.get('/',(req,res,next)=>{
    res.sendFile(Path.join(__dirname, "../public/index.html"))
})

app.listen(1337,()=>{
    console.log("here we are, listening on port 1337")
})