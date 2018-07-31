'use strict';
const BST = require('./bst.js');
const binary = new BST(3,3,null);
binary.insert(1,1);
binary.insert(4,4);
binary.insert(6,6);
binary.insert(7,7);


function height(node){
  if(!node){
    return 0;
  }
  let leftHeight = height(node.left);
  let rightHeight = height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}


module.exports = height;
