let employees = [
    {
        "id": 1,
        "name": "Abhinav",
        "department": "IT",
        "Salary": 75000
    },
    {
        "id": 2,
        "name": "Gaurav",
        "department": "Sales",
        "Salary": 52000
    },
    {
        "id": 3,
        "name": "Raj",
        "department": "IT",
        "Salary": 64000
    }
];

let itDept = employees.filter((emp)=>emp.department === "IT");
console.log(itDept);

let salary = employees.filter((emp)=>emp.Salary<65000);
console.log(salary);