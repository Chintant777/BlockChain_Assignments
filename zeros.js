console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
console.log(removeLeadingTrailing("0.000"));
console.log(removeLeadingTrailing("0"));
console.log(removeLeadingTrailing("230.5000"));

function removeLeadingTrailing(str){
    return Number(str).toString();
}