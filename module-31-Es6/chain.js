//data access
const data = [{id:1, name: 'abul', address: 'kochu Khet' }];
// console.log(data[0].address)


const products = {
    count: 5000,
    data: [
        {id:1, name:'lenevo laptop', price: 65000},
        {id:1, name:'mackBook', price: 165000}
    ]
}

//need second products price
// console.log(products.data[1].price)

const user = {
    id: 5001,
    name: 'shariful Taj',
    address: {
        street:{
            first:'54/1 uttor side',
            second: 'probager goli',
            third:'no dorai',
        },
        city:'dhaka',
    }
}

const user2 = {
    id:5002,
    name:'pori bibir majgar',
    address: {
        city: 'chittagong',
        country:'bangladesh',
    }
}


console.log(user.address.street.second)
console.log(user2.address.street?.second)
