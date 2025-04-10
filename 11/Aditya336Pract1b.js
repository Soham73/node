const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the first number: ", (firstnum) => {
    r1.question("Enter the second number: ", (secondnum) => {
        let num1 = parseFloat(firstnum);
        let num2 = parseFloat(secondnum);

        sum = num1 + num2;  
        console.log(`Addition is : ${sum}`)
    })
})

