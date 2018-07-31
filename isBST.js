//left nodes always have to be < right nodes
'use strict';
const BST = require('./bst.js');
const binary = new BST(3,3,null);  
binary.insert(1,1);
binary.insert(4,4);
binary.insert(6,6);
binary.insert(7,7);

const populateTree = () => {
  const tree = new BST(5,5);
  tree.left = new BST(7,7,5);
  tree.right = new BST(4,4,5);
  return tree;
};



function isItBST(node){
  let isBST = true;
  if(!node){
    return true; // if there is no node in a tree 
    // we assume its a binary tree with 0 nodes
  }
  let leftIsBST = isItBST(node.left);
  let rightIsBST = isItBST(node.right);

  if(node.left && node.left.key > node.key){
    isBST = false;
  }
  if(node.right && node.right.key < node.key){
    isBST = false;
  }
  if(!leftIsBST || !rightIsBST){
    isBST = false;
  }
  return isBST;
}

console.log(isItBST(binary));