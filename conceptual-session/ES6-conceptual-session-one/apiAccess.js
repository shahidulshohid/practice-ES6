const people = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer",
        contact: {
            email: "john.doe@example.com"
        },
        address: {
            street: "123 Main St",
            city: "San Francisco",
            state: "CA",
            zip: "94105"
        },
        social: {
            twitter: "@johndoe"
        },
        hobbies: ["Coding", "Hiking", "Photography"]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        occupation: "Graphic Designer",
        contact: {
            email: "jane.smith@example.com",
            phone: "987-654-3210"
        },
        hobbies: ["Drawing", "Traveling"]
    },
    {
        id: 3,
        name: "Mark Johnson",
        age: 40,
        occupation: "Marketing Manager",
        contact: {
            email: "mark.johnson@example.com",
            phone: "123-456-7890"
        },
        address: {
            street: "789 Oak St",
            city: "Chicago",
            state: "IL",
            zip: "60607"
        },
        hobbies: ["Running", "Golf"]
    }
];

// const city = people[0].address.city;
// const city1 = people[1].address?.city;
// console.log(city)
// console.log(city1)

people.map((person) => {
    const sentence = `person's name is ${person.name} city: ${person.address?.city || 'N/A'}`;
    // console.log(sentence);
    ;
})

people.map((person) => {
    const sentence = `
    person's name is ${people.name} and his city is ${person.address?.city || 'N/A'} and his age ${person.age}
    `;
    console.log(sentence)
})

const x = people.find((p) => p.age === 40)
// console.log(x.name)

const y = people.find((person) => person.age > 20)
// console.log(y.name, y.address.city, y.contact.email)






