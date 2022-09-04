function findFact(num) {
    return helperFunction(num);
}

function helperFunction(num) {
    if(num === 1){
        return 1;
    }
    return helperFunction(num-1) * num;
}

function checkSpecialNumber() {
    let number = document.getElementsByClassName('specialNumber')[0].value;
    let endValue = number.length;
    let resultString = document.getElementById("result");
    let result  = 0;

    for(let i=endValue; i>0; i--) {
        result += findFact(parseInt(number[i-1]));
    }

    if(result === parseInt(number)){
        resultString.innerHTML = number + " is Special Number";
    } else {
        resultString.innerHTML = number + " is not a Special Number";
    } 

}