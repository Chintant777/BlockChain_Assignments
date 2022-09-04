let displayVal = 1;
let resultEle = document.getElementById('result');
for(let i=0; i<4; i++){
    for(let j = 0; j<4; j++){
        if(j<=i){
            resultEle.innerHTML += displayVal + " ";
            displayVal++;
        } else {
            break;
        }
    }
    resultEle.innerHTML += "<br />";
}