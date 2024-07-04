const getSign = (comparedStatus, format, file) => {
  if (comparedStatus === 'unchanged') {
    return format === 'json' ? '' : '  ';
  }
  return file === 'file1' ? '- ' : '+ ';
};

const getLines = (arr, format) => {
  const result = arr.map((item) => [getSign(item.status, format, item.file) + item.key,
    item.value]);
  return result;
};

export default getLines;
