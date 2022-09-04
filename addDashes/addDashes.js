
function resultFunc() {
    let num = document.getElementById("num").value;
    computeDashes(num);
}

function computeDashes(num){
    let result = document.getElementById("result");

    for(let i =0; i<num.length-1; i++) {
        if(parseInt(num[i]) % 2 === 0 && parseInt(num[i+1]) % 2 === 0) {
            num = num.substring(0,i+1) + '-' + num.substring(i+1);
        }
    }
    result.innerHTML = num;
}