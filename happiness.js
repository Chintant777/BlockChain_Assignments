console.log(findHappiness("Work makes me happy"));
console.log(findHappiness("You give me the feeling of happiness"));

function findHappiness(s){
    s = s.toLowerCase();
    return s.split(" ").includes("happiness") ? "Hurray" : "There is no happiness";
}