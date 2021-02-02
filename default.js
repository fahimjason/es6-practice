// set default value in for a parameter

function add(num1, num2 = 20) {
    return num1 + num2;
}

const result = add(15, 10); // Output will be 25
console.log(result);