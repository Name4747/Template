const express = require('express')
const app = new express()
const db = require('better-sqlite3')('Things.db')

app.use(express.static('public'))
app.use(express.json())

app.get('/things',(req,res) =>{
    const query = db.prepare("SELECT * FROM things")
    const things = query.all()
    res.json({
        things
    })
})

app.listen(8080,() => {
    console.log("server started")
})