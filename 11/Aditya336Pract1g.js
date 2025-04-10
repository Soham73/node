const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('1. Addition')
console.log('2. Subtraction')
console.log('3. Multiplication')
console.log('4. Division')
console.log('5. Exit')
r1.question('Enter 1st Number : ', (num1) => {
r1.question('Enter 2nd Number : ', (num2) => {
    r1.question(('Enter the number (1-5) to choose an option :'),(choice)=>{
        const a = parseFloat(num1)
        const b = parseFloat(num2)
        switch(choice){
            case '1':
                console.log('Addition is : '+(a+b))
                break;
            case '2':
                console.log('Subtraction is : '+(a-b))
                break;
            case '3':
                console.log('Multiplication is : '+(a*b))
                break;
            case '4':
                console.log('Division is : '+(a/b))
                break;
            case '5':
                console.log('Exiting..')
                break;
            default:
                console.log('Enter valid number ')
        }
    })
})
})