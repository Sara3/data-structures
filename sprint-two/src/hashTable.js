

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);  
  var tuple = [];
  tuple[0] = k;
  tuple[1] = v; 

  if (this._storage[index] === undefined) {
    var bucket = [];
    bucket.push(tuple);
    this._storage[index] = bucket;
  } else if (this.retrieve(k)) {
    var tpl = this.findTuple(k, this._storage[index]);
    tpl[1] = v; 
  } else {
    this._storage[index].push(tuple);
  }
};

HashTable.prototype.findTuple = function(k, bucket) {
  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      return bucket[i];
    }
  }
  return false; 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  
  var t = this.findTuple(k, bucket);
  if (t !== false) {
    return t[1];
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage[index];
  let t = this.findTuple(k, bucket);
  bucket.splice(bucket.indexOf(t), 1);
  
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(1)?
  findTuple: linear
  retrieve: O(1)?
  remove: O(1)?


 */


