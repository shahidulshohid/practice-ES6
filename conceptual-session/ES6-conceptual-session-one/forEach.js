const arr = [10, 20, 30, 40, 50];

// function show(a) {
//   console.log(a);
// }

// arr.forEach((a) => console.log(a))

// let sum = 0;
// arr.forEach((item) => {
//     sum += item
// })
// console.log(sum)

arr.forEach((item, index, arr2) => {
  console.log(item, index, arr2);
});
