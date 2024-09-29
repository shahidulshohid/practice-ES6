const myInfo = {
    name:'mehedi',
    age:25,
    subjects:['bangla', 'english', 'math']
}

const sentence = `
amar name ${myInfo.name} ${myInfo.subjects.map((sub) => sub).join(' ')}
`;
console.log(sentence)