var Stack = function() {
  //declare new obj variable, newStack
  var newStack = {};
  newStack.count = 0;
  newStack.storage = {};
  extend(newStack, stackMethods);
  return newStack;
};
//extend function

var extend = function(to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
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