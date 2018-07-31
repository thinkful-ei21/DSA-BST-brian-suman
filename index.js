'use strict';

const BST = require('./bst.js');

function main(){

  const Binary = new BST();

  Binary.insert(3);
  Binary.insert(1);
  Binary.insert(4);
  Binary.insert(6);
  Binary.insert(9);
  Binary.insert(2);
  Binary.insert(5);
  Binary.insert(7);


console.log(Binary);
}

main();
