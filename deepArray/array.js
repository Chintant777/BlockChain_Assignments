let arr = [1,2,56,[3,4,[5, [6,[8]]]], 7];

let result = [];
let counter = 0;
let isFlat;

while(true){
    if(!arr[counter]) {
        if(isFlat) break;
        arr = result;
        counter = 0;
        result = [];
        isFlat = true;
    }
    if(typeof arr[counter] === "object"){
        result.push(...arr[counter]);
        counter++;
        isFlat = isFlat && false;
    } else {
        result.push(arr[counter]);
        counter++;
        isFlat = isFlat && true;
    }
}
console.log(result);