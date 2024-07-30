let arr = [2, 2, 2, 1, 4, 5, 6];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    count++;
  }
}

console.log(count);
