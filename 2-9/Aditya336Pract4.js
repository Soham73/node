const readline = require('readline')
const fs = require('fs')
const http = require('http')
const html = fs.readFileSync('./Template/Index.html','utf-8')
// Step 1 : Create a server 
const server = http.createServer((request,response)=>{
    let path = request.url
    if(path === '/' || path.toLocaleLowerCase()==='/home'){
        response.end('You are in Home page.')
    }else if(path.toLocaleLowerCase()==='/about'){
        response.end('You are in About page.')
    }else if(path.toLocaleLowerCase()==='/contact'){
        response.end('You are in Contact page.')
    }else{
        response.end('Error 404 : Page Not Found :-(')
    }
})

// Step 2 : Start the server 
server.listen(3000,'127.0.0.1',() => {
    console.log('Server has started!')
})
