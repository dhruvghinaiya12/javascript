let n=10
let oddsum=0
let evensum=0
for(let i=0;i<n;i++){
    if(i%2==0){
        evensum+=i
    }
    else{
        oddsum+=i
    }
}

if(evensum>oddsum){
    console.log(evensum-oddsum);
}
else{
    console.log(oddsum-evensum);
}