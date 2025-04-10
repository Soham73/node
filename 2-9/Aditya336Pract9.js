const fs = require('fs') 
const http = require('http')

const server = http.createServer()
server.on('request',(req,res)=>{
    const rstream = fs.createReadStream('input1.txt')
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata)
    })
    rstream.on('end',()=>{
        res.end()
    })
    rstream.on('error',(err)=>{
        console.log(err)
        res.end('File not found')
    })
})
server.listen('3000','127.0.0.1',()=>{
    console.log('Server is running on port 3000')
})





