var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var treeObject = Tree();
  treeObject.value = value;
  this.children.push(treeObject);
};

treeMethods.contains = function(target) {
  let bool = false;
  var iterate = function (obj) {
    if (obj.value === target) {
      bool = true;
    }

    if (obj.children.length > 0 ) {
      _.each(obj.children, el => {
        return iterate(el);
      });
    }
  };
   
  iterate(this);
  return bool;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// var fakeTree = {
//   'firstName' : 'John',
//   'lastName'  : 'Smith',
//   'children' : [
//                 { 'firstName' : 'Joe',
//                 'lastName'  : 'Smith', 'children': []},
//                 { 'firstName' : 'Sara',
//                 'lastName'  : 'Smith', 'children': []}
//                 ]
// };

  //create its own object, and then add the object into tree