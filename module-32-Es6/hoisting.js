

// print10()
// print5()
// for(var i = 0; i < 5; i++){
//     console.log(i)
// }
// console.log('outside', i)

for(let i = 0; i < 5; i++){
    // console.log(i)
}
// console.log('outside', i)

function print5(){
    console.log('inside print5', 5)
}

var print10 = function(){
    console.log('inside print10', 10)
}