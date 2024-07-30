let arr = [1, 2, 3, 4, 5];
let positions = 2;
for(let i =0;i<positions;i++){
    arr.unshift(arr.pop());
}
console.log(arr);