'use strict';

const BST = require('./bst.js');

function main(){
  const Binary = new BST(3,3,null);  
  Binary.insert(1,1);
  Binary.insert(4,4);
  Binary.insert(6,6);
  Binary.insert(9,9);
  Binary.insert(2,2);
  Binary.insert(5,5);
  Binary.insert(7,7);
  console.log(Binary);  
}

main();


