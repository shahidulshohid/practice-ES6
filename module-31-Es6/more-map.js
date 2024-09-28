const numbers = [12, 10, 8, 15, 7];

const double = numbers.map(num => num * 2);
console.log(double)

const FiveBonus = numbers.map(num => num + 5)
console.log(FiveBonus)

const halves = numbers.map(num => num / 2)
console.log(halves)

const friends = ['tom', 'john', 'micheal', 'oliver'];
const lengths = friends.map(frnd => frnd.length)
console.log(lengths)

const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter)