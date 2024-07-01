const addToObject = (acc, arr) => {
  const [name, value] = arr;
  acc[name] = value;
  return acc;
};

const getSign = (compareResult, fileNumber) => {
  if (compareResult === 0) {
    return '';
  }
  return fileNumber === 1 ? '- ' : '+ ';
};

const formatToJson = (arr) => {
  const lines = arr.map((item) => [getSign(item[2], item[3]) + item[0], item[1]]);
  const obj = lines.reduce(addToObject, {});
  const result = JSON.stringify(obj);
  return result;
};

export default formatToJson;
