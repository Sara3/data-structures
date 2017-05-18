var Queue = function() {
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count++;
};

Queue.prototype.reList = function() {
  for ( let key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[this.count];
};
Queue.prototype.dequeue = function() {
  let temp = this.storage[0];
  this.count--;
  delete this.storage[0];
  this.reList();
  return temp;
};

Queue.prototype.size = function() {
  if ( this.count < 0) {
    return 0;
  }
  return this.count;
};

