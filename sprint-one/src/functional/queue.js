var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };
  
  var resetKey = function () {
    for (let key in storage) {
      storage[key - 1] = storage[key];
    }
  };
  

  someInstance.dequeue = function() {
    //function resetKey()
    var temp = storage[0];
    delete storage[0];
    size--; 
    resetKey();
    return temp;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size; 
  };

  return someInstance;
};
