function factorial(x) {
    if(x <= 1){
        return 1;
    }
    return x * factorial(x-1);
}

//calling factorial
function compute(){
    let result = document.getElementsByClassName('result')[0];
    let number = parseInt(document.getElementById('number').value);
    result.innerHTML = `Factorial of ${number} is ${factorial(number)}`;
}