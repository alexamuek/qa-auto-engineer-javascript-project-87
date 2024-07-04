import getLines from './helpers.js';

const addToObject = (acc, arr) => {
  const newLine = arr.reduce(
    (accumulator, item) => {
      accumulator[item.key] = item.value;
      return accumulator;
    },
    {},
  );
  const result = { ...acc, ...newLine };
  // result[name] = value;
  return result;
};

const formatToJson = (arr) => {
  const lines = getLines(arr, 'json');
  const obj = lines.reduce(addToObject, {});
  const result = JSON.stringify(obj);
  return result;
};

export default formatToJson;
