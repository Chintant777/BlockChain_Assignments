let arr1 = prompt("Enter first array element seprated by comma");
arr1 = arr1.split(",").map(Number);

let set = new Set();
let duplicate = [];

for(let val of arr1){
    if(set.has(val)){
        duplicate.push(val);
    }
    set.add(val);
}

document.write("Duplicate: "+ duplicate +"<br />");
document.write("Unique Values: "+ Array.from(set) + "<br />");