let arr = [1, 2, 3, 4, 5];
let Sort = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    Sort = false;
  
  }
}
console.log(Sort);
