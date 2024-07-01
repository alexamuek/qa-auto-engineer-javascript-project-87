const getSign = (compareResult, fileNumber) => {
  if (compareResult === 0) {
    return '  ';
  }
  return fileNumber === 1 ? '- ' : '+ ';
};

const getLines = (arr) => {
  const result = arr.map((item) => [getSign(item[2], item[3]) + item[0], item[1]]);
  return result;
};

export default getLines;
