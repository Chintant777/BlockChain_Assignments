function truncate(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("truncateResult")[0];

    if(s.length > 4){
        resultTag.innerHTML = s.substring(0,4);
    } else {
        resultTag.innerHTML = s;
    }
};

function removeSpace(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("removeSpace")[0];

    resultTag.innerHTML = s.replace(/\s/g, '');
};

function replaceWords(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("replaceWords")[0];

    let tempArr = s.split(" ");

    [tempArr[0], tempArr[1]] = [tempArr[1], tempArr[0]];

    resultTag.innerHTML = tempArr.join(" ");
};

function replaceCharacter(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("replaceCharacter")[0];

    resultTag.innerHTML = s.replace(/a/g, "x");
};

// 5: split can be used to convert string into array
// 6: split can be used and pass specific string and occurance will be 1 less than total length of result array.
// findAll can be used as well to check occurance
// 7: \n can be used to break to new line

function isLowerCase(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("isLowerCase")[0];

    resultTag.innerHTML = (s[0] === s[0].toLowerCase()) ? "True": "False";
}

function isYesTriggered(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("isYesTriggered")[0];

    resultTag.innerHTML = (s.match(/^yes$/ig)) ? "True": "False";
}

function covertUpperCase(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("covertUpperCase")[0];

    resultTag.innerHTML = s.toUpperCase();
}

function covertFirstUpperCase(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("covertFirstUpperCase")[0];

    resultTag.innerHTML = s[0].toUpperCase() + s.substring(1);
}

function covertLowerCase(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("covertLowerCase")[0];

    resultTag.innerHTML = s.toLowerCase();
}

function swapStrings(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("swapStrings")[0];

    let left = s.substring(0, parseInt(s.length/2));
    let right = s.substring(parseInt(s.length/2));

    resultTag.innerHTML = right + left;
}

function countChars(){
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("countChars")[0];

    let result = {};

    for(let i=0; i<s.length; i++) {
        if(result[s[i]]){
            result[s[i]] = ++result[s[i]];
        } else {
            result[s[i]] = 1;
        }
    }

    resultTag.innerHTML = JSON.stringify(result);
}

function reverseString() {
    let s = prompt("Enter String");
    let resultTag = document.getElementsByClassName("reverseString")[0];
    let result = "";

    for(let i=s.length-1; i>=0; i--){
        result += s[i];
    }

    resultTag.innerHTML = result;
}

