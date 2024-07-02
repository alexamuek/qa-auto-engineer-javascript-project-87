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

const handleObjects = (obj1, obj2, formatter) => {
// convert objects in array
  const items1 = Object.entries(obj1);
  const items2 = Object.entries(obj2);
  const comparedItem1 = items1.map((item) => [item[0], item[1], compareValues(item, obj2), 1]);
  const comparedItem2 = items2.map((item) => [item[0], item[1], compareValues(item, obj1), 2]);
  // console.log(comparedItem2);
  const part = comparedItem2.filter((item) => item[2] !== 0);
  const unsortedLines = comparedItem1.concat(part);
  const sortedLines = _.sortBy(unsortedLines, [(item) => [item[0], item[3]]]);
  return formatter(sortedLines);
};

export default handleObjects;
