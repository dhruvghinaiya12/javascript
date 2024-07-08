let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let mux = 1;
for (let i = 0; i < n; i++) {
  mux *= arr[i];
}
console.log(mux);
