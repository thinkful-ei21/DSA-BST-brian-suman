'use strict';
const BST = require('./bst.js');
const height = require('./height');
const binary = new BST(3,3,null);
binary.insert(1,1);
binary.insert(4,4);
binary.insert(6,6);
binary.insert(7,7);


function balance(bst){
let height =  height(bst);

  if(!bst){
    return 0;
  }

  let heightDiff =

}
