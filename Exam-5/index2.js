let arr = [1, 2, 3, 4, 5, 6, 0, 8, 9];
let smaller = arr[4];
for (i = 0; i < arr.length; i++) {
  if (arr[i] < smaller) {
    smaller = arr[i];
  }
}
console.log(smaller);
