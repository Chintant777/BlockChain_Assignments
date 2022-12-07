function prime(n) {
    n = parseInt(n);

    let counter = 2;

    if(n ===2){
        return true;
    }

    if(n<=1){
        return false;
    }

    while(counter < n) {
        if(n%counter === 0){
            return false;
        }
        counter++;
    }

    return true;
}

console.log(prime("7"));
console.log(prime("134"));