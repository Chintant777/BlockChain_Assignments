function checkMarks() {
    let marks = parseInt(document.getElementsByClassName('marks')[0].value);

    switch(true) {
        case marks > 90 && marks <=100: 
            alert("A grade");
            break;
        case marks > 80 && marks <=90: 
            alert("B grade");
            break;
        case marks > 70 && marks <=80: 
            alert("C grade");
            break;
        case marks > 60 && marks <=70: 
            alert("D grade");
            break;
        case marks >= 50 && marks <=60: 
            alert("E grade");
            break;
        case marks > 40 && marks <50: 
            alert("Student is Failed");
            break;
        default:
            alert("Invalid Marks");
            break;
    }
}