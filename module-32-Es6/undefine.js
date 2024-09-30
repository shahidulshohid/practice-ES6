/**
 * 8 ways to get undefine
 * 1: variable that is not initialized will give undefine;
 * 2:function with no return
 * 3:parameter that is not passed will be undefine
 * 4:if return has nothing on right side will return undefine;
 * 5:property that doesn't exists on an object will give you undefine;
 * 6:accessing array elements outside of the index range
 * 7:deleting an element inside an array
 * set a value directly ot undefine
 */

// 1 number
let first;
// console.log(first)

// 2 number
function second(a, b){
    const total = a + b;
}
const result = second();
// console.log(result)

// 3 number
function third(a, b, c, d) {
  const result = a + b + c + d;
  console.log(a, b, c, d);
}
// third(5, 6);

// 4 number 
function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}
const total = noNegative(5, -3)
// console.log(total)

// 5 number 
const fifth = {id:2, name:'ponchom', age: 40}
// console.log(fifth.id, fifth.salary);

const sixth = [5, 6, 7, 9, 34, 32];
delete sixth[1] // you should not do it instead use splice
// console.log(sixth[1], sixth[5], sixth[200])
console.log(sixth)

const eights = undefined // you should not do it
const nine = null // you can do it instead of undefined;
const data = {results: [], update: null}
// console.log(data)

// console.log(typeof undefined)
// console.log(typeof null)

