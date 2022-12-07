console.log(doubleLetters("loop"));
console.log(doubleLetters("yummy"));
console.log(doubleLetters("yumym"));

function doubleLetters(str){
    let counter = 0;
    while(counter < str.length-1) {
        if(str[counter] === str[counter+1]){
            return true;
        }
        counter++;
    }
    return false;
}