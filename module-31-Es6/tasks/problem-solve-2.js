const array = [30, 50, 79, 78, 90, 101, 30];

const divisibleBy10 = array.filter((e) => e % 10 === 0)
console.log(divisibleBy10)


const divisibleBy10WithFind = array.find((e) => e % 10 === 0)
console.log(divisibleBy10WithFind)