let arr1 = prompt("Enter first array element seprated by comma");
arr1 = arr1.split(",").map(Number);

let arr2 = prompt("Enter second array element seprated by comma");
arr2 = arr2.split(",").map(Number);

if(arr1.includes(4) && arr2.includes(4)){
    document.write("4 in Both array");
} else if(arr1.includes(4)) {
    document.write("4 in Array1");
} else if(arr2.includes(4)) {
    document.write("4 in Array2");
} else {
    document.write("No Array contains 4");
}


