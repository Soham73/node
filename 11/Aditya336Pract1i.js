const readline = require("readline")
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question("Enter the number: ", (num) => {
        const num1 = parseInt(num);
       for (i=1;i<=10;i++){
        console.log(`${num1} x ${i} = ${num1*i}`)
       }
})