let arr = prompt("Enter array element seprated by comma");
arr = arr.split(",").map(Number);

let square = arr.map(x=>x*x);

let squares = new Map();
squares.set("squares", square);

document.write(squares.get("squares"));
console.log(squares.get("squares"));
