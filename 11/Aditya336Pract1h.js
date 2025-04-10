const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question('Enter a Number : ', (num1) => {
    const num = parseInt(num1)
    let i=1;
    while (i<=10){
        const res = num * i ;
        console.log(`${num} x ${i} = ${res}`);
        i++
    }
})