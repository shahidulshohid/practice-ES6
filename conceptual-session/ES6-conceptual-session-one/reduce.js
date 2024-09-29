const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for(const num of numbers){
    sum += num;
}
// console.log(sum)
let sum1 = 1;

for(const num of numbers){
    sum1 *= num;
}
// console.log(sum1)

const result = numbers.reduce((pre, curr) => pre + curr, 0)
// console.log(result)

const result1 = numbers.reduce((pre, curr) => pre * curr, 1)
// console.log(result1)

const arrayOfNumbers = [{a:1}, {a:2}, {a:3}, {a:4}]

const result2 = arrayOfNumbers.reduce((pre, curr) => pre + curr.a, 0)
// console.log(result2)


const result3 = arrayOfNumbers.reduce((pre, curr) => pre * curr.a, 1)
console.log(result3)