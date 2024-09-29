const array = [1, 3, 5, 7, 9];

// let arr = [];
// for(let i = 0; i < array.length; i++){
//     console.log(i)
//     const evenNumber = array[i] + 1;
//     arr.push(evenNumber)
// }
// console.log(arr)

// another way 
// let arr = []
// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 !== 0){
//         const result = array[i] + 1;
//         arr.push(result)
//     }
// }
// console.log(arr)

// with map 
const evenNumber = array.map((e) => {
    if(e % 2 === 1){
        const result = e + 1;
        return result
    }
})
console.log(evenNumber)