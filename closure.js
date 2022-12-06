// 1: yes, it is closure as it has access to outer function variable and bundle together in function
// output will be alert of 100

/**
 * 2: closure is having access of not only scope of defined function but also lexical variables of 
 * outer function variables; whereas scope means having access to variable in certain scope. apart
 * from this when try to access it gives not defined error.  
 */

/**
 * 3: lexical scope is the scope of outer function which is accessible inside inner function even though
 * it is declared as const or let. Both of them in same lexical scope. therefore, it runs without error. 
 */

// 4: output prints 3 for 3 times. as loop runs 3 times. var has global scope.