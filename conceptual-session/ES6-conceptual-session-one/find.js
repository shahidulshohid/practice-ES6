const numbers = [12, 32, 25, 75, 13, 55, 97, 25];

let find = null;
for(const item of numbers){
    if(item > 50){
        find = item;
        break;
    }

}
// console.log(find)

let find1 = null;
for(const item of numbers){
    if(item > 50 && item % 2 === 0){
        find1 = item;
        break;
    }

}
// console.log(find1)

const firstMatchNumber = numbers.find((item) => item > 50)
// console.log(firstMatchNumber)


const firstMatchNumber1 = numbers.find((item) => item > 50 && item % 2 === 0)
console.log(firstMatchNumber1)
