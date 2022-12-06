/**
 * 1: Higher Order function takes function as argument of function and function that passed known as callback
 * Both are not same. As higher order must contains argument as fn. but callback can be both as callback of one
 * function and takes fn as argument so Higher order.
 * 
 * 2: filter is Higher order function.
 * SYNTAX: filter(array, fn); as it takes fn as argument and based on conditions specified in filter it returns 
 * new array. 
 * */

let number =10;

function useSimple(callbackFn1, callbackFn2, temp){
    callbackFn1(callbackFn2, temp);
}
// higer order
function usePrint(callbackFn2, temp1) {
    console.log(callbackFn2(temp1));
}
// callback 
function useDouble(number){
    return number*2;
}
// higer order
useSimple(usePrint, useDouble, number);

/**
 * 4: output will be 
 * Hello John
 * Hello Tina
 * Hello Kale
 * Hello Max
 */