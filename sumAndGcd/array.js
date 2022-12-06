let arr = prompt("Enter array element seprated by comma");

arr = arr.split(",").map(Number);

let sumOfOdd = 0, sumOfEven = 0, totalOdds = 0, totalEvens = 0, sum = 0;

for(let i=0; i<arr.length; i++) {
    if((i+1)%2 === 0){
        sumOfEven += arr[i];
        totalEvens++;
    } else {
        sumOfOdd += arr[i];
        totalOdds++;
    }
    sum += arr[i];
}

function gcd(x, y) {
    while(y){
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

document.write("Difference: "+ Math.abs(sumOfOdd - sumOfEven)+"<br />");
document.write("Total Odd Elements: "+ totalOdds+"<br />");
document.write("Total Even Elements: "+ totalEvens+"<br />");
document.write("Average: "+ sum/arr.length+"<br />");
document.write("GCD: "+ gcd(sumOfOdd, sumOfEven)+"<br />");


