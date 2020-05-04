let arr=[]
let result
let avg

for(let i=0; i<100; i++){
    arr[i]=(Math.floor(Math.random()*(101-1))+1);
    result+=arr[i]
    avg=result/arr.length
 }

console.log(avg)