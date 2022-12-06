let arr = prompt("Enter array element seprated by comma");
arr = arr.split(",").map(Number);

let total = arr.reduce((sum, curr)=>sum+curr,0);
document.write(total);
document.write(total/arr.length);

