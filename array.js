console.log(sevenBoom([1,2,3,4,5,6,7]));
console.log(sevenBoom([8,6,33,100]));

function sevenBoom(arr){
    return arr.includes(7) ? "Boom!": "There is no 7 in the array";
}