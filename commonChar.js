let arr1 = ["a", "b", "c", "d"];
let arr2 = ["e", "f", "g", "h", "a", "i", "j"];
let result = "";
let i = 0;

function arrIteration(values, checkArr){
    return {
        next: function(){
            if(!checkArr.includes(values[i])) {
                return {
                    value: values[i++],
                    done: false
                }
            } else {
                result = values[i];
                return {
                    done: true
                }
            }
        }
    }
}

let isFind = arrIteration(arr1, arr2).next().done;
while(!isFind) {
    isFind = arrIteration(arr1, arr2).next().done;
}

console.log(result);