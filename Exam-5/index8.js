let arr = [1, 2, 3, 4, 5];
let positions = 2;
let start = arr.slice(-positions % arr.length);
let end = arr.slice(0, arr.length - (positions % arr.length));
let rotateArray = start.concat(end);
console.log(rotateArray);
