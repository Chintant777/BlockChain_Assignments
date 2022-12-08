let strDemo = "iNeuron";

let i = 0;
function stringIteration(str){
    return {
        next: function(){
            if(i<str.length) {
                return {
                    value: str[i++],
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

console.log(stringIteration(strDemo).next());
console.log(stringIteration(strDemo).next());
console.log(stringIteration(strDemo).next());
console.log(stringIteration(strDemo).next());
console.log(stringIteration(strDemo).next());
console.log(stringIteration(strDemo).next());
console.log(stringIteration(strDemo).next());
console.log(stringIteration(strDemo).next());
console.log(stringIteration(strDemo).next());