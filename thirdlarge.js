'use strict';
const BST = require('./bst.js');
const binary = new BST(3,3,null);

binary.insert(1,1);
binary.insert(4,4);
binary.insert(6,6);
binary.insert(7,7)

let highArray = [];
function thirdLarge(bst){
  if(!bst){
    return 0;
  }

  let highNode = thirdLarge(bst.right);
  let prevNode = thirdLarge(bst.right);
  if(!highArray.includes(bst.value))
    highArray.push(bst.value);




}
thirdLarge(binary)
highArray.sort();
console.log("the third highest number is " + highArray[2]);
