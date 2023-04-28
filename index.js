const express = require("express")
const cors = require("cors")
const db = require("./db")

const app = express()
app.use(express.json())
app.use(cors())
db()

app.use('/api', require('./routes/user'))

app.get("/", (req, res)=>{
    res.send("Hello")
})

app.listen(5000, (req, res)=>{
    console.log("Server is running on PORT 5000")
})