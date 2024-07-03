let arr = [1, 2, 3, 4];
let n = arr.length;
let even = 0;
let odd = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] % 2 === 0) {
    even += arr[i];
  } else {
    odd += arr[i];
  }
}
console.log("the sum of even number is", even);
console.log("the sum of odd number is", odd);
if (even > odd) {
  console.log("even is greater");
} else {
  console.log("odd is greater");
}
