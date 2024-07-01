import getLines from './helpers.js';

const joinLines = (acc, arr) => {
  const result = `${acc}  ${arr[0]}: ${arr[1]}\n`;
  return result;
};

const formatToDefault = (arr) => {
  const lines = getLines(arr);
  const result = lines.reduce(joinLines, '{\n');
  return `${result}}`;
};

export default formatToDefault;
