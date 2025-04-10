const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question("Enter the first number: ", (firstnum) => {
    r1.question("Enter the second number: ", (secondnum) => {
        let num1 = parseFloat(firstnum);
        let num2 = parseFloat(secondnum);
        if(num1 > num2)
        {
            console.log(`First number ${num1} is Greater`)
        }else if(num2 > num1){
            console.log(`Second number ${num2} is Greater`)
        }else{
            console.log(`Both Numbers are equal`)
        }
    })
})
