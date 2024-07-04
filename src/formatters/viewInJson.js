import _ from 'lodash';

const formatToJson = (arr) => {
  const filteredLines = arr.filter((item) => item.status !== 'unchanged');
  const lines = filteredLines.map((item) => [item.key, item.value]);
  const obj = _.fromPairs(lines);
  const result = JSON.stringify(obj);
  return result;
};

export default formatToJson;
