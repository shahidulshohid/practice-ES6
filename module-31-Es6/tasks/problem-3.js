const instructor = [
    { name: 'Nodi', age:28, position: 'Senior'},
    { name: 'Akil', age:26, position: 'Junior'},
    { name: 'Shobus', age:30, position: 'Senior'}
]

const needPosition = instructor.filter((e) => e.position === 'Senior')
console.log(needPosition)
