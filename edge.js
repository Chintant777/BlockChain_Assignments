function nextEdge(side1, side2){
    if(side1 < 0 || side2 < 0){
        return "All side must be positive";
    }

    return side1+side2-1;
}

console.log(nextEdge(8,10));
console.log(nextEdge(5,7));
console.log(nextEdge(9,2));
