document.querySelector('[name="fromConvert"]').addEventListener('change', function(){
    let currValue = document.querySelector('[name="fromConvert"]').value;
    let selectedValue = currValue === "cel" ? "fer" : "cel";
    let selectedTextValue = selectedValue === "cel" ? "Celtius" : "Ferenhit";
    document.querySelector('[name="toConvert"]').innerHTML = null;
    
    //creating option 
    const option = document.createElement('option');
    const optionText = document.createTextNode(selectedTextValue);

    option.appendChild(optionText);

    option.setAttribute('value', selectedValue);

    document.querySelector('[name="toConvert"]').appendChild(option);

});

function compute() {
    let fromConvert = document.querySelector('[name="fromConvert"]').value;
    let value = parseFloat(document.querySelector('#degree').value);
    console.log(value);
    let result = document.querySelector('.result');

    switch(fromConvert) {
        case 'cel':
            let fer = ((9*value/5)+32).toFixed(2);   
            result.innerHTML = `Ferenhit is: ${fer}`;     
            break;
        case 'fer':
            let cel = ((value-32)*5/9).toFixed(2);
            result.innerHTML = `Celsius is ${cel}`;
            break;
        default:
            alert('some selection/input is wrong');
            break;
    }
}