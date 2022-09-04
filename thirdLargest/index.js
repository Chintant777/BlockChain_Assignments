// change value of an array
let arr = [3,45,6,7,23,5,7,8];
// change nthPos from here
let nthPos = 3;

function find_largest(arr, pos) {
    arr = arr.sort((a,b) => b-a);
    return arr[pos];
}

console.log(find_largest(arr, nthPos-1));