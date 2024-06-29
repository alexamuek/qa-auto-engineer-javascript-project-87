import _ from 'lodash';

const compareValues = (value, obj) => {
  if (!Object.hasOwn(obj, value[0])) {
    return -1;
  }
  return obj[value[0]] === value[1] ? 0 : 1;
};
/*
-1 - нет ключа
0  - ключ и значение полностью совпадают
1  - значения у ключа разные
*/

const getSign = (compareResult, fileNumber) => {
  if (compareResult === 0) {
    return '  ';
  }
  return fileNumber === 1 ? '- ' : '+ ';
};

const joinLines = (acc, arr) => {
  const result = `${acc}  ${arr[0]}: ${arr[1]}\n`;
  return result;
};

const handleObjects = (obj1, obj2) => {
// convert objects in array
  const items1 = Object.entries(obj1);
  const items2 = Object.entries(obj2);
  const comparedItem1 = items1.map((item) => [item[0], item[1], compareValues(item, obj2), 1]);
  const comparedItem2 = items2.map((item) => [item[0], item[1], compareValues(item, obj1), 2]);
  const part = comparedItem2.filter((item) => item[2] !== 0);
  const unsortedLines = comparedItem1.concat(part);
  const sortedLines = _.sortBy(unsortedLines, [(item) => [item[0], item[3]]]);
  const lines = sortedLines.map((item) => [getSign(item[2], item[3]) + item[0], item[1]]);
  const result = lines.reduce(joinLines, '{\n');
  return `${result}}`;
};

export default handleObjects;
