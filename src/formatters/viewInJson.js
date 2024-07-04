import getLines from './helpers.js';

const addToObject = (acc, arr) => {
  const newLine = {};
  const [key, value] = arr;
  newLine[key] = value;
  const result = { ...acc, ...newLine };
  return result;
};

const formatToJson = (arr) => {
  const lines = getLines(arr, 'json');
  const obj = lines.reduce(addToObject, {});
  const result = JSON.stringify(obj);
  return result;
};

export default formatToJson;
