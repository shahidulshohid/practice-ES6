const obj = {
    name:'shahidul islam',
    profession: 'web developer',
    'phone-number':'0124575858',
    address: 'khadash rajbari',
    car: {
        color: 'red', 
        price:5000,
        model:'alion'
    }
}
// const x = 'name'
// console.log(obj[x])
// const obj2 = {...obj};
// obj.name = 'alamin ahmed'
// obj.age = 50

// // console.log(obj)
// // console.log(obj2)

// const {age:myAge, name, car: {color, price}} = obj;

// console.log(color)
// console.log(price)
// console.log(myAge)

// console.log(obj["phone-number"])

for(const key in obj){
    console.log('================',obj[key])
}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
console.log(Object.entries(obj))