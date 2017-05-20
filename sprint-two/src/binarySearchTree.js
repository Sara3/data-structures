
var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  extend(newTree, binarySearchTreeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(val) { 
  var newNode = this.Node(val);
  
  var compareAndInsert = function(node) {
    if (val < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        compareAndInsert(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        compareAndInsert(node.right);
      }
    }
  };
  compareAndInsert(this);
};
// contains();  accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
binarySearchTreeMethods.contains = function(target) {
  var find = function (node) {
    if (target === node.value) {
      return true; 
    } else {
      if ((target < node.value) && (node.left !== null)) {
        return find(node.left);
      } else if ( (target > node.value) && (node.right !== null)) {
        return find(node.right);
      } else {
        return false;
      }
    }
  };
  return find(this);
};
//accepts a callback and executes it on every value contained in the tree
binarySearchTreeMethods.depthFirstLog = function(callback) {
  var iterate = function (node) {
    if (node === null ) {
      return false;
    }
    callback(node.value);
    if (node.left !== null) {
      iterate(node.left);
    } 
    if (node.right !== null) {
      iterate(node.right);
    }
  };
  iterate(this);
};
 

binarySearchTreeMethods.Node = function(val) {
  var node = {};
  node.value = val; 
  node.left = null;
  node.right = null; 
  return node; 
};


/*
 * Complexity: What is the time complexity of the above functions?
    insert: O(log n)
    contains:  O(log n)
    depthFistLog: O(n)
    
 */

