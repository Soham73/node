const express = require('express')
const EventEmitter = require('events')
const app = express()
const events = new EventEmitter()

let count = 0

events.on("CounterAPI", () => {
    count++
    console.log("Event is called", count)
})

app.get('/', (req, res) => {
    res.send('API Called')
    events.emit("CounterAPI")
})

app.get('/search', (req, res) => {
    res.send('Search API Called')
})

app.get('/update', (req, res) => {
    res.send('Update API Called')
})

app.listen(5000)
























// nodemon to run 