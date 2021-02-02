const array = [1, 57, 85];
const array2 = [9, 47, 64];
const array3 = [8, 45, 82];
const allArray = array.concat(array2).concat(50).concat(array3);

// concat with three dots
const allArray2 = [...array, ...array2, 100, ...array3];
console.log(allArray);
console.log(allArray2);

const num = [20, 35, 35];
const maxValue = Math.max(...num);
console.log(maxValue);