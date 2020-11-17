// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    let results = [];
    for (let i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    return '[' + results.join(',') + ']';
  } else if (typeof obj === 'object' && obj !== null) {
    let results = [];
    for (let key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + results.join(',') + '}';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  return '' + obj;
};