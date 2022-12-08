function sleep(seconds){
    return new Promise(resolve => setTimeout(() => resolve("success"), seconds*1000));
}

sleep(5).then(res => console.log(res));