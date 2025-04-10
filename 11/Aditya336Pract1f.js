const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question('Enter a Age : ',(answer)=>{
    const age= parseInt(answer)
    if (age > 0 && age < 13){
        console.log('You are Child')
    }else if( age >= 13 && age <=19){
        console.log('You are Teenager')
    }else if( age >= 13 && age <=19){
        console.log('You are Teenager')
    }else if( age >= 20 && age <=35){
        console.log('You are Young Adult')
    }else if( age >= 36 && age <=60){
        console.log('You are Adult')
    }else if( age > 60){
        console.log('You are Senoir Citizen')
    }else if( age <= 0){
        console.log('Please enter valid age')
    }
})









