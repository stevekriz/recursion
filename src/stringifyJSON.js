const stringifyArray = (array) =>
  `[${array.map((element) => stringifyJSON(element)).join(',')}]`;

const stringifyObject = (object) => {
  const strings = [];

  _.each(object, (value, key) => {
    if (typeof value === 'function' || value === undefined) return;

    strings.push(`${stringifyJSON(key)}:${stringifyJSON(value)}`);
  });

  return `{${strings.join(',')}}`;
};

const stringifyJSON = (obj) => {
  if (Array.isArray(obj)) return stringifyArray(obj);
  if (_.isObject(obj)) return stringifyObject(obj);
  if (typeof obj === 'string') return `"${obj}"`;
  return `${obj}`;
};
