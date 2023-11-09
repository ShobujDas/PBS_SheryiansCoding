//  


const sentence = "saare jaha se achha hidustann humara";

// console.log(sentence.split(" ")); // ['saare', 'jaha', 'se', 'achha', 'hidustann', 'humara']

const word = "saare";
// console.log(word.split(""));
// console.log(word.split("").reverse());
// console.log(word.split("").reverse().join(""));


const savedSentenceArray = sentence.split(" ")
.map(function(word){
   
   return word.split("").reverse().join("");
})
console.log(savedSentenceArray);

const result = savedSentenceArray.join(" ");
console.log(result);





// note: map method will return us an array