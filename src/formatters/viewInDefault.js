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

const joinLines = (acc, arr) => {
  const result = `${acc}  ${arr[0]}: ${arr[1]}\n`;
  return result;
};

const formatToDefault = (arr) => {
  const lines = getLines(arr, 'default');
  const result = lines.reduce(joinLines, '{\n');
  return `${result}}`;
};

export default formatToDefault;
