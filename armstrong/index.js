function findCube(num) {
    return num * num * num;
}

function checkArmstrong() {
    let number = document.getElementsByClassName('armstrong')[0].value;
    let endValue = number.length;
    let resultString = document.getElementById("result");
    let result  = 0;

    for(let i=endValue; i>0; i--) {
        result += findCube(parseInt(number[i-1]));
    }

    if(result === parseInt(number)){
        resultString.innerHTML = number + " is Armstrong Number";
    } else {
        resultString.innerHTML = number + " is not an Armstrong Number";
    } 

}