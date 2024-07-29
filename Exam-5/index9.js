let arr =  [5, 3, 4, 1, 2]
let Sort= true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        Sort = false;
        break;
    }
}

console.log(Sort);
