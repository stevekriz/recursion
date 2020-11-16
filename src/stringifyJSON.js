// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  }
  if (obj instanceof Object) {
    let result = [];
    var objectKeys = Object.keys(obj);
    objectKeys.forEach(function(key) {
      var keyOut = '"' + key + '"';
      var keyValue = obj[key];
      if (typeof keyValue === 'string') {
        result.push(keyOut + '"' + keyValue + '"');
      } else if (keyValue instanceof Object) {
        result.push(keyOut + stringifyJson(keyValue));
      } else {
        result.push(keyOut + keyValue);
      }
      return '{' + result + '}';
    });
  }
  return '' + obj;
};