// 3. How to empty an array in JavaScript?
//  do not reset it to a new array , and do not loop through to pop each value

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.length = 0;
console.log(arr);
console.log(arr.length);
