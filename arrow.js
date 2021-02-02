// first method of writing function
// function doubleIt(num) {
//     return num * 2;
// }

//another method
// const doubleIt = function myFun(num) {
//     return num * 2;
// }

// single parameter arrow function
const doubleIt = num => num * 2;
const doubleResult = doubleIt(50);
console.log(doubleResult);


// multi parameter arrow function
const add = (a, b) => a + b;
const addResult = add(10, 20);
console.log(addResult);


// no parameter arrow function
const giveBack = () => 5;
const giveBackResult = giveBack();
console.log(giveBackResult);


//multiline arrow function
const doMath = (x, y) => {
    const add = x + y;
    const diff = x - y;
    const result = add * diff;
    return result;
}

const result = doMath(15, 10);
console.log(result);