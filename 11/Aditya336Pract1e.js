const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question('Enter a number : ',(answer)=>{
    const number= parseInt(answer)
    if (number > 0){
        console.log('The number '+number+' is Positive')
    }else{
        console.log('The number '+number+' is Negative')
    }
})

/*r1.question('Enter a number : ',(answer)=>{
    const number= parseInt(answer)
    if (number > 0){
        console.log('The number '+number+' is Positive')
    }else if( number < 0){
        console.log('The number '+number+' is Negative')
    }else{
        console.log('The number '+number+' is Zero')
    }
})*/