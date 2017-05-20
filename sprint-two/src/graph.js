
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  for (let key in this.storage) {
    this.removeEdge(key, node);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.storage[fromNode], toNode ) 
      && _.contains(this.storage[toNode], fromNode);
  
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
    cb(parseInt(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode: O(1)
  contains: O(n)
  removeNode: O(n)
  hasEdge: O(n)
  addEdge: O(1)
  removeEdge: O(n)
  forEach: O(n)
  
  
  
 */
