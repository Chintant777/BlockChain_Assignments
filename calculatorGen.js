
function* calculatorGen(sign, val1, val2){
    yield eval(val1 + sign + val2);
}

console.log(calculatorGen('*',2,2).next());
console.log(calculatorGen('+',3,3).next());