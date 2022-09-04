let sum = 0;
for(let i = 1; i< 1000; i++) {
    if(i%3 === 0 && i%5 === 0){
        sum += i;
    }
}
console.log("Sum from Multiple of 3 and 5(range: 1 to 1000) is: " + sum);