console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("1234567"));
console.log(validatePIN("123456"));

function validatePIN(str){
    let regex4 = new RegExp("^[0-9]{4}$");
    let regex6 = new RegExp("^[0-9]{6}$");
    return regex4.test(str) || regex6.test(str);
}