let arr = []
let even = []
let sum=0
for (let i = 0; i < 100; i++) {
    arr[i] = (Math.floor(Math.random() * (101 - 1)) + 1);
    if (arr[i] % 2 == 0) {
        even.push(arr[i])
        sum+=arr[i]
    }
}

even.toString()

console.log(sum)