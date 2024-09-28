
/**
 * truthy
 * true
 * 1: any number (+ve, -ve) will be truthy other than 0
 * 2: any string is truthy other than empty string
 * 0
 * {}
 * []
 * 
 * 
 * falsy 
 * 1: false 
 */
let x = null;
if(x){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is falsy')
}

// optional 
//check falsy
const y = null;
if(!y){
    console.log('this is falsy value')
}

//chcke truthy
const z = {class: 9}
if(!!z){
    console.log('this is truthy value')
}
