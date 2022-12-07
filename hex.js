console.log(isValidHexCode("#CD5C5C"));
console.log(isValidHexCode("#EAECEE"));
console.log(isValidHexCode("#CD5C&C"));

function isValidHexCode(str){
    let regex = new RegExp("^#[0-9A-Fa-f]{6}$");

    return regex.test(str);
}