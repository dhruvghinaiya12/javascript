let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let output = 1;
for (let i = 0; i < n; i++) {
  output *= arr[i];
}
console.log(output);
