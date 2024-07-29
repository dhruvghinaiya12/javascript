let arr = [1, 2, 3, 4, 5, 60, 0, 8, 9];
let max=arr[4]
for(i=0 ; i<arr.length ; i++){
 if(arr[i] > max){
    max = arr[i];
 }
}
console.log(max);