const people = [
  { name: "Mina", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

let sum = 0;
for (let i = 0; i < people.length; i++) {
  sum += people[i].age;
}
// console.log(sum)

const totalAge = people.reduce((accu, curr) => accu + curr.age, 0);
// console.log(totalAge)

