let students = [
    { name: "John", marks: "92" },
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "95"},
    { name: "Oscar", marks: "64" },
    { name: "Kevin", marks: "48" },
];

let gradeMap = new Map();

students.map((student)=> {
    let mark = parseInt(student.marks);

    if(mark > 90)
        addElement("A", student);   
    else if(mark <= 90 && mark >80)
        addElement("B", student);
    else if( mark <= 80 && mark >70)
        addElement("C", student);
    else if( mark <= 70 && mark >60)
        addElement("D", student);
    else if( mark <= 60 && mark >50)
        addElement("E", student);
    else
        addElement("F", student);
});

function addElement(grade, obj){
    if(gradeMap.has(grade)){
        gradeMap.set(grade, [...gradeMap.get(grade), {name: obj['name'], grade: grade}]);
    } else {
        gradeMap.set(grade, [{name: obj['name'], grade: grade}]);
    }
}
console.log(gradeMap);
