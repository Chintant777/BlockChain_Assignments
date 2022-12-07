function changeEnough(arr, total) {
    let valueArr = [0.25, 0.10, 0.05, 0.01];
    let sum = 0;
    for(let i =0; i<arr.length; i++){
        sum += arr[i]*valueArr[i];
    }
    return (sum>=total); 
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));
console.log(changeEnough([30, 40, 20, 5], 12.55));