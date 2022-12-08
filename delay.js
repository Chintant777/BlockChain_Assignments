function delay(){
    return new Promise(resolve => setTimeout(() => resolve("success"), 1000));
}

delay().then(res => console.log(res));