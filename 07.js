
// 7.Write a JavaScript function that checks whether a passed string is palindrome or not

function stringPalChecker(str){

   var reversed = str.split("").reverse().join("");
   return reversed === str;

}


console.log(stringPalChecker("poop"));
console.log(stringPalChecker("loop"));













