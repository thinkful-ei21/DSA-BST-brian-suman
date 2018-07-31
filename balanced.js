'use strict';
const BST = require('./bst.js');
const height = require('./height');
const binary = new BST(3,3,null);
binary.insert(1,1);
binary.insert(2,2);
binary.insert(4,4);
binary.insert(6,6);
binary.insert(7,7);

function isBalanced(node){
  let isbalanced = true;
  if(!node){
    return isBalanced;
  }
  let heightDifference = Math.abs(height(node.left) - height(node.right));
  if(heightDifference > 1){
    isbalanced = false;
  }
  return isbalanced;
}

console.log(isBalanced(binary));
