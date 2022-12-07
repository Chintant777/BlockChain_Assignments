let sum = 0;
let n = 6;
function sumOfTraingleDots(n) {
    let temp = 0;
    let sum = 0;
    if(n === 1){
        return 1;
    }
    return n*n-(sumOfTraingleDots(n-1));
}

for(let i = n; i>=1; i--){
    sum += sumOfTraingleDots(i);
}

console.log(sum);