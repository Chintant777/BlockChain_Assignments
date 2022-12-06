let Employee = new Map();

Employee.set('id', [67,48,29]);
Employee.set("name", ["Hitanshu", "Ninad", "Amandeep"]);
Employee.set("salary", [75000, 82000, 98000]);

console.log(Employee.get('id'));
console.log(Employee.get('id').length);

for(let i = 0; i<Employee.get('id').length; i++){
    console.log(Employee.get('id')[i] + " : " + Employee.get('name')[i]);
}

console.log(Employee.get('salary'));

let sum = Employee.get('salary').reduce((sum, curr)=> sum+curr, 0);
console.log(sum/Employee.get('id').length);