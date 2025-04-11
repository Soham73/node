// import package
const express = require('express')
const fs = require('fs')
let app = express()

const movies = JSON.parse(fs.readFileSync('movies.json'))

// Route = HTTP method + URL
// app.use((req,res)=>{ for using if-else
app.get('/', (req, res) => {
    res.status(200).json({
        name: "Soham",
        rollNo: "2419317",
        list_of_Movies: movies
    })
})

// create a server
app.listen(3000, () => {
    console.log('server is started')
})



















// npm init 