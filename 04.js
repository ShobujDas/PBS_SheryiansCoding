
// 4. How would you check if a number is an integer?

// method number one 
Number.isInteger(1) //true
Number.isInteger(1.2) //false


//method number two
var a = 2.0;
if(a%1 === 0){
   console.log(`${a} is integer`);
}else{
   console.log(`${a} is not interger`);
}

