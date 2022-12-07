function powerOf2(n) {
    if(n === 0){
        return 1;
    }

    return 2 * powerOf2(n-1);
}

function rightSwift(number, position){
    return Math.floor(number/powerOf2(position));
}

console.log(rightSwift(5,2));
console.log(rightSwift(5,1));