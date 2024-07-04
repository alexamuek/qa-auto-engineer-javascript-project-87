import _ from 'lodash';

const compareValues = (value, obj, file) => {
  if (!Object.hasOwn(obj, value[0])) {
    return file === 'file1' ? 'removed' : 'added';
  }
  return obj[value[0]] === value[1] ? 'unchanged' : 'changed';
};

const findDiff = (arr, objToCompare, fileNumber) => {
  const comparedItems = arr.map((item) => {
    const result = {
      key: item[0],
      value: item[1],
      status: compareValues(item, objToCompare, fileNumber),
      file: fileNumber,
    };
    return result;
  });
  return comparedItems;
};

const handleObjects = (obj1, obj2, formatter) => {
// convert objects in array
  const items1 = Object.entries(obj1);
  const items2 = Object.entries(obj2);
  const comparedItem1 = findDiff(items1, obj2, 'file1');
  const comparedItem2 = findDiff(items2, obj1, 'file2');
  const part = comparedItem2.filter((item) => item.status !== 'unchanged');
  const unsortedLines = comparedItem1.concat(part);
  const sortedLines = _.sortBy(unsortedLines, [(item) => [item.key, item.file]]);
  return formatter(sortedLines);
};

export default handleObjects;
