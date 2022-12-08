/**
 * 1: performance and scalability can be improved. 
 * if we have long task then it can run in background and user can still interact 
 * with screen. whenever result is ready it displays. it can easily scalable as it runs in 
 * background.
 * 
 * 2: we can do async await with promises but we have to await promise as we have to stop 
 * execution untill promise resolved or reject.
 * 
 * 3: web application: for fetching large data in background.
 * interact with multiple resources in this we can use async/ await
 * high graphics games when hugh computation required.
 * 
 * 4: output: 3
 * 
 * 5: output: 1 Error: some error
 * 
 * 6: 3,2,1, Go!
 * 
 * 7: after converting 3rd line to arrow function output will be 15
 * 
 * 8: async functions can be nested by declaring async function inside another async fn.
 * 
 * async function test() {
      const data = await axios.get(
        "https://random-data-api.com/api/v2/users?size=3"
      );
      let images = [];
      alert(data);
      async function fetchImages(data) {
        let counter = 0;
        while (counter < data.length) {
          images.push(await axios.get(data.avatar));
          alert(images[counter]);
          counter++;
        }
      }
      fetchImages(data);
    }

* 9: In async/await mechanism stops execution further untill data is returned from url.
* If there is a lock it will block. we can try to avoid lock object or any code may contain lock
* to not pass into async/await mechanism. there is some mechanism where maximum limit can be set for certain
* task. we can use that mechanism if it's under that limit then allow else reject promise.
*
* 10: when I have alredy written code in that manner then instead of changing in all website i will use syncronous code
* when result would be quick as only small data to fetch or work with.
* when I do not need result of some data in future execution. In other words, it can be used for independant tasks.
 */
