
function* Infinite(){
    let i =0;
    while(true){
        yield i++;
    }
}

// console.log(Infinite());

for(let i of Infinite()){
    console.log(i);
}