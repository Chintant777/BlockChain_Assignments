
function isLeapYear(year){
    if(year % 400 == 0){
        return true;
    } else if(year % 100 == 0){
        return false;
    } else if(year % 4 == 0){
        return true;
    } else {
        return false;
    }
}

function compute() {
    let inputYear = parseInt(document.getElementById('leapyear').value);
    let result = document.getElementsByClassName('result')[0];
    if(isLeapYear(inputYear)) {
        result.innerHTML = `${inputYear} is a leap year`;
    } else {
        result.innerHTML = `${inputYear} is not a leap year`;
    }
}
