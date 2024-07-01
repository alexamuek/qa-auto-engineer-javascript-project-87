const getSign = (compareResult, fileNumber, format) => {
  if (compareResult === 0) {
    return format === 'json' ? '' : '  ';
  }
  return fileNumber === 1 ? '- ' : '+ ';
};

const getLines = (arr, format) => {
  const result = arr.map((item) => [getSign(item[2], item[3]) + item[0], item[1]], format);
  return result;
};

export default getLines;
