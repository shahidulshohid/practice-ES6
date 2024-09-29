const petOwner = {
    name: 'akbor ali',
    contact: {
        phone: '421545412',
        email: 'shahidul@gmail.com',
    },
    pet: {
        name: 'lefi',
        info: {
            color:'red',
            weight: '1.2kg'
        },
    },
    food: ['apple', 'orange', 'pepeya']
}
// console.log(petOwner.contact.phone)
// // console.log(petOwner.pet.info.color)
// console.log(petOwner.address)
// console.log(petOwner?.address?.houseNumber)
console.log(petOwner?.food[2])