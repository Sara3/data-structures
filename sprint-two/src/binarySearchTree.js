var BinarySearchTree = function(value) {
  //like the trees 
  var newTree = Node(value);
  extend(newTree, treeMethods);
  return newTree;
};




var teeMethods = {}; 

// insert(value) which accepts a value and places in the tree in the correct position.

treeMethods.insert = function(val) {
 //  var newNode = Node(val); 
 // if(newTree.left === null && newTree.right == null){
 //  if (val < this.newTree.value) {
 //      this.newTree.left = newNode; 
 //  } else {
 //      this.newTree.right = newNode; 
 //  }
(too complicated, there is something easier but my brain is froozen, lets work on it tom)
};
// contains();  accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
treeMethods.contains = function(target) {

};
//accepts a callback and executes it on every value contained in the tree
treeMethods.depthFirstLog = function(callback) {

};
 

//make a new node 

// left 
// right 
// val
var Node = function(value) {
  var node = {};
  node.val = value; 
  node.left = null;
  node.right = null; 
  return node; 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

