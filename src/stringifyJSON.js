// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//With helper functions
const stringifyArray = array => {
  return '[' + _.map(array, element => {
    return stringifyJSON(element);
  }).join(',') + ']';
};

const stringifyObject = object => {
  const strings = [];

  _.each(object, (value, key) => {
    if (_.isFunction(value) || _.isUndefined(value)) {
      return;
    }

    strings.push(stringifyJSON(key) + ':' + stringifyJSON(value));
  });

  return '{' + strings.join(',') + '}';
};

const stringifyJSON = obj => {
  if (_.isArray(obj)) {
    return stringifyArray(obj);
  } else if (_.isObject(obj)) {
    return stringifyObject(obj);
  } else if (_.isString(obj)) {
    return '"' + obj + '"';
  } else {
    return '' + obj;
  }
};

// //Without helper functions
// const stringifyJSON = obj => {
//   if (_.isArray(obj)) {
//     return '[' + _.map(obj, element => {
//       return stringifyJSON(element);
//     }).join(',') + ']';
//   } else if (_.isObject(obj)) {
//     const strings = [];

//     _.each(obj, (value, key) => {
//       if (_.isFunction(value) || _.isUndefined(value)) {
//         return;
//       }

//       strings.push(stringifyJSON(key) + ':' + stringifyJSON(value));
//     });

//     return '{' + strings.join(',') + '}';
//   } else if (_.isString(obj)) {
//     return '"' + obj + '"';
//   } else {
//     return '' + obj;
//   }
// };