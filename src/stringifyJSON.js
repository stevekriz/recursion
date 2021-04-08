const stringifyArray = (array) =>
  `[${_.map(array, (element) => stringifyJSON(element)).join(",")}]`;

const stringifyObject = (object) => {
  const strings = [];

  _.each(object, (value, key) => {
    if (_.isFunction(value) || _.isUndefined(value)) return;

    strings.push(`${stringifyJSON(key)}:${stringifyJSON(value)}`);
  });

  return `{${strings.join(",")}}`;
};

const stringifyJSON = (obj) => {
  if (_.isArray(obj)) return stringifyArray(obj);
  if (_.isObject(obj)) return stringifyObject(obj);
  if (_.isString(obj)) return `"${obj}"`;
  return `${obj}`;
};
