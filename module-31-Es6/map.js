




const numbers = [4, 5, 2, 8];

function doubledIt(num){
    console.log('num now', num)
    return num * 2;
}
const double2 = n => n * 2;

const result = numbers.map(n => n * 2)
console.log(result)

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }
// console.log(doubled)