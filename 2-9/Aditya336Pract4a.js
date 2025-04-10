const readline = require('readline')
const fs = require('fs')
const http = require('http')
const html = fs.readFileSync('./Template/Index1.html','utf-8')
// Step 1 : Create a server 
const server = http.createServer((request,response)=>{
    let path = request.url
    if(path === '/' || path.toLocaleLowerCase()==='/home'){
        response.writeHead(200)
        response.end(html.replace('{{%CONTENT%}}','You are in Home page.'))
    }else if(path.toLocaleLowerCase()==='/about'){
        response.writeHead(200)
        response.end(html.replace('{{%CONTENT%}}','You are in About page.'))
    }else if(path.toLocaleLowerCase()==='/contact'){
        response.writeHead(200)
        response.end(html.replace('{{%CONTENT%}}','You are in Contact page.'))
    }else{
        response.writeHead(404)
        response.end(html.replace('{{%CONTENT%}}','Error 404 : Page not found :( '))
    }
})

// Step 2 : Start the server 
server.listen(3000,'127.0.0.1',() => {
    console.log('Server has started!')
})






