const joinLines = (acc, arr) => {
  const result = `${acc}  ${arr[0]}: ${arr[1]}\n`;
  return result;
};

const getSign = (compareResult, fileNumber) => {
  if (compareResult === 0) {
    return '  ';
  }
  return fileNumber === 1 ? '- ' : '+ ';
};

const formatTodefault = (arr) => {
  const lines = arr.map((item) => [getSign(item[2], item[3]) + item[0], item[1]]);
  const result = lines.reduce(joinLines, '{\n');
  return `${result}}`;
};

export default formatTodefault;
