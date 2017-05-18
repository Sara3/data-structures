var Stack = function() {
  this.count = 0; 
  this.storage = {};
};

Stack.prototype.push = function (val) { 
  this.storage[this.count] = val; 
  this.count++;
}; 

Stack.prototype.pop = function() {
  let temp = this.storage[this.count - 1];
  this.count--;  
  delete this.storage[this.count];
  return temp;
};

Stack.prototype.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
};


