var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.count = 0; 
  return newQueue;
};

var queueMethods = {};
queueMethods.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count++;
};
queueMethods.resetList = function() {
  for (let key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  } 
};
queueMethods.dequeue = function() {
  var temp = this.storage[0];
  delete this.storage[0];
  this.count--;
  this.resetList();
  return temp; 
};
queueMethods.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
};

