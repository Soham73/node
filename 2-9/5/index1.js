const chalk = require('chalk')
const validator = require('validator')

console.log(chalk.red("Hello Soham Kadu !!"))
console.log(chalk.green.underline("Hello Soham Kadu !!"))
console.log(chalk.blue.strikethrough("Hello Aditya Patil !!"))

const res = validator.isEmail("alimganjawala@gmail.com")
console.log(chalk.red(res))

const res2 = validator.isLowercase('soham')
console.log(chalk.green(res2))

const res3 = validator.isUppercase('Soham')
console.log(chalk.blue(res3))




























// npm i validator
