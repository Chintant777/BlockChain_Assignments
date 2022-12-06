let Student = new Map();

Student.set('id', [1,2,3]);
Student.set("name", ["Hitanshu", "Ninad", "Amandeep"]);
Student.set("scores", [90, 88, 92]);

console.log(Student.get('name'));

// Student.delete("scores");
console.log(" --- one parameter ---");

for(let arr of Student) {
    console.log(arr[1]);
}

console.log(" --- two parameter ---");

for(let arr of Student) {
    console.log(arr[0] + " " + arr[1].join(","));
}

console.log(" --- three parameter ---");

for(let arr of Student) {
    console.log(arr[0] + " " + arr[1].join(","));
    console.log(Student);
}

