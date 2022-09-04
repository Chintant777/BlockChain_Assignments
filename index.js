function helperFunction(num) {
    return num*5 + 1;
}

function checkHouseNumber() {
    let number = parseInt(document.getElementsByClassName('houseNumber')[0].value);
    let resultString = document.getElementById("result");

    resultString.innerHTML = helperFunction(number) + " Mathces Needed !!";
}