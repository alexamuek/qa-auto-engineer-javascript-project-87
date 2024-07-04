import _ from 'lodash';

const formatToJson = (arr) => {
  const filteredLines = arr.filter((item) => item.status !== 'unchanged');
  const arr1 = filteredLines.filter((item) => item.file === 'file1');
  const arr2 = filteredLines.filter((item) => item.file === 'file2');
  const obj = _.fromPairs([['file1', arr1], ['file2', arr2]]);
  const result = JSON.stringify(obj);
  return result;
};

export default formatToJson;
