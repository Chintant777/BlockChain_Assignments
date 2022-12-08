const arr = ["John", "Rohn", "Danny", "James"];

let i = 0;
function arrIteration(values){
    return {
        next: function(){
            if(i<values.length) {
                return {
                    value: values[i++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

console.log(arrIteration(arr).next());
console.log(arrIteration(arr).next());
console.log(arrIteration(arr).next());
console.log(arrIteration(arr).next());
console.log(arrIteration(arr).next());
console.log(arrIteration(arr).next());
console.log(arrIteration(arr).next());
console.log(arrIteration(arr).next());
