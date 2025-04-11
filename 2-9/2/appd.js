fs = require('fs')
textIn = fs.readFileSync('./Files/input.txt', 'utf-8')
console.log(textIn)

content = `Data from input.txt : \n Date created ${new Date()}`
fs.writeFileSync('./Files/input.txt', content)
