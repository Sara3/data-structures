var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.count = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.count] = val;
  this.count++;
};
stackMethods.pop = function() {
  let temp = this.storage[this.count - 1];
  this.count--;
  delete this.storage[this.count];
  return temp;
};

stackMethods.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count; 
};


