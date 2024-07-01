import getLines from './helpers.js';

const addToObject = (acc, arr) => {
  const [name, value] = arr;
  acc[name] = value;
  return acc;
};

const formatToJson = (arr) => {
  const lines = getLines(arr);
  const obj = lines.reduce(addToObject, {});
  const result = JSON.stringify(obj);
  return result;
};

export default formatToJson;
