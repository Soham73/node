//In order to create a server we need to import the HTTP module
const readline = require('readline')
const fs = require('fs')
const http = require('http')

// Step 1 : Create a server 
const server = http.createServer((request,response)=>{
    console.log('A new request received!')
})
//The above call back function will be executed every time when a new request hits the server
// and when a new request hits the server this callback functions receives two parameters request and response.

// Step 2 : Start the server 
server.listen(3000,'127.0.0.1',() => {
    console.log('Server has started!')
})
// The first parameter is port number where the aplication is running and second parameter is host. 
