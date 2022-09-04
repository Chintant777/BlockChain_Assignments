let factorials = new Map();
let resultTable = document.getElementsByClassName('resultTable')[0].getElementsByTagName('tbody')[0];

document.getElementsByClassName("findValues")[0].addEventListener('click', function () {
    prime(
        parseInt(document.getElementsByClassName("low")[0].value),
        parseInt(document.getElementsByClassName("high")[0].value)
    );
});

function prime(low, high) {
    for(let i = low; i<high; i++){
        let isPrime = true;
        if(i<=1) {
            continue;
        } else {
            let multiple = 1;
            for(let j = 2; j<i; j++) {
                multiple *= j;
                if(i%j === 0) {
                    isPrime =false;
                    break;
                }
            }
            if(isPrime) {
                factorials.set(i, multiple*i);
            }
        }

    }

    resultTable.innerHTML = '';

    for([k,v] of factorials) {
        resultTable.innerHTML += `<tr><td>${k}</td><td>${v}</td></tr>`;
    }

    factorials.clear();
}
