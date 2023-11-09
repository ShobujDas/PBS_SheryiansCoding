// 2. How to check if an object is an array or not? Provide some code .

// console.log(typeof []); //object
// console.log(typeof {}); //object

function checkArray(elem){

   return Array.isArray(elem)



}

console.log(checkArray([]));
console.log(checkArray({}));








