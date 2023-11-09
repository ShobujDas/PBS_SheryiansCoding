// 6. Write a JavaScript function that reverse a number

//method number one
function reverse(num){

  return Number(num.toString().split('').reverse().join(""))
}
reverse(12);
console.log(reverse(334));


// method number 2

function reverse2(num){
   var rev = 0
   while(num > 0){
      const rem = num%10;
      rev = rev * 10 + rem;
      num = Math.floor(num/10);
   }
   return rev

}
console.log(reverse2(123));





