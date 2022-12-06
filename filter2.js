let hospitals = [
    {
        "id": 1,
        "name": "Hospital A",
        "location": "Delhi",
        "noOfBeds": 450,
        "availability": "Yes"
    },
    {
        "id": 2,
        "name": "Hospital B",
        "location": "Pune",
        "noOfBeds": 150,
        "availability": "No"
    },
    {
        "id": 3,
        "name": "Hospital",
        "location": "Pune",
        "noOfBeds": 350,
        "availability": "Yes"
    }
];

let beds = hospitals.filter((hosp)=>hosp.noOfBeds > 200);
console.log(beds);

let available = hospitals.filter((hosp)=>hosp.availability === "Yes");
console.log(available);

let location = hospitals.filter((hosp)=>hosp.location === "Pune");
console.log(location);