function XO(str) {
    let countX = 0, countO = 0, counter = 0;

    while(counter < str.length) {
        if(str[counter].toLowerCase() === 'x'){
            countX++;
        } else if(str[counter].toLowerCase() === 'o'){
            countO++;
        }
        counter++;
    }

    return countX === countO;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));