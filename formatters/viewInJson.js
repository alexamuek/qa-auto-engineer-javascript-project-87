import getLines from './helpers.js';

const addToObject = (acc, arr) => {
  const [name, value] = arr;
  const result = acc;
  result[name] = value;
  return acc;
};

const formatToJson = (arr) => {
  const lines = getLines(arr, 'json');
  const obj = lines.reduce(addToObject, {});
  const result = JSON.stringify(obj);
  return result;
};

export default formatToJson;
