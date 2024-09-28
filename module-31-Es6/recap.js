
const a = 56;
const numbers = [56, 7, 8];
const person = {
    name: 'shakib khan'
}
const message = `Hi ${person.name} has a ${a} access to ${numbers[2]}`;
console.log(message);

const {age, z, ...others} = {x:2, y:5, z:3, name: 'Ovijeet', age: 55}
// console.log(age)
// console.log(z)
// console.log(others)


const [first, second, ...remaining] = ['jodu', 'modhu', 'kodu', 'mama']
console.log(first);
console.log(second);
console.log(remaining);