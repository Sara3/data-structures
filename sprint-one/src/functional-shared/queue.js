
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   
  var newQueue = {};
  newQueue.count = 0; 
  newQueue.storage = {};
   
  extend(newQueue, queueMethods); 
  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.count] = val; 
  this.count++;
};

queueMethods.reList = function() {
  for (let key in this.storage) {
    this.storage[key - 1 ] = this.storage[key];
  }
};

queueMethods.dequeue = function() {
  let temp = this.storage[0];
  delete this.storage[0];
  this.count--;
  this.reList();
  return temp;
};

queueMethods.size = function () {
  if (this.count < 0 ) {
    return 0;
  }
  return this.count;
};
