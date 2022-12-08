
function* throwGen(){
    while(true){
        try{
            yield 0;
        } catch(e){
            console.log("error occured" + e);
        }
    }
}

console.log(throwGen().next());
console.log(throwGen().throw(new Error("testing error")));