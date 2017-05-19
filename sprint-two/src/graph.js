// var obj = {
//   1: [2, 3, 4],
//   2: [1, 4, 5],
//   3: [23, 23]
// };

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
  console.log(this.storage);
  // console.log(this.storage);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // console.log('this is the node we want to remove', node);
  delete this.storage[node];
  // console.log(this.storage[node]);
  //iterate through this.storage
    //run removeEdge(this.storage[element], node)

  for (let key in this.storage) {
    // console.log(this.storage[key]);
    this.removeEdge(key, node);
    // console.log(this.storage[key]);

  }



  

  // _.each(this.storage, element => {
  //   this.removeEdge(element, node);
  // });
   
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.storage[fromNode], toNode);
  // _.each(this.storage[fromNode], element => {
  //   if (element === toNode) {
  //     return true;
  //   }
  // });

  // return false;
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
  
};  

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[fromNode] = _.reject(this.storage[fromNode], item => {
    if (item === toNode) {
      return true;  
    }
    return false;
  });

  this.storage[toNode] = _.reject(this.storage[toNode], item => {
    if (item === fromNode) {
      return true;  
    }
    return false;
  });
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (let key in this.storage) {
    cb(key);

  }
  // _.each(this.storage, element => {
  //   _.each(element, el => {
  //     cb (el);
  //   });
  // });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var g = new Graph()
g.addNode(1);
g.addNode(2);
g.addNode(3);
g.addEdge(2,3);
g.removeNode(2);

