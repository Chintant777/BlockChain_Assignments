// 1: we can not add dulpicate in set as it contains only unique values

let set = new Set();

set.add(7);
set.add(5);
set.delete(5);

console.log(set);

console.log(checkForValueInSet(8));

function checkForValueInSet(value){
    let set1 = new Set();
    
    while(set1.size < 4) {
        set1.add(Math.ceil(Math.random()*10));
        console.log(set1);
    }
    return set1.has(8);
}