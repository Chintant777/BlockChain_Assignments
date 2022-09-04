
function checkTriangle(e){
    let angles = document.getElementsByClassName("angle");
    if(angles[0].value === angles[1].value && angles[1].value === angles[2].value){
        alert("triangle is Equilateral");
    } else if(angles[0].value === angles[1].value || angles[1].value === angles[2].value || angles[1].value === angles[2].value){
        alert("triangle is Isosceles");
    } else {
        alert("triangle is Scalene");
    }
}

function validateTriangle() {
    let angles = document.getElementsByClassName("angle");

    if((parseInt(angles[0].value) + parseInt(angles[1].value)  + parseInt(angles[2].value)) !== 180
      || parseInt(angles[0].value) <= 0
      || parseInt(angles[1].value) <= 0
      || parseInt(angles[2].value) <= 0 ) {
        alert("sum must be 180 and Individual angle must be greater than 0");
        return false;
    }
    return true;
}