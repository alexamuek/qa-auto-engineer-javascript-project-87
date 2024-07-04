const getValues = (item, sortedLines) => {
  const newValue = item.value;
  const oldValue = sortedLines.filter(
    (item1) => item1.file === 'file1'
      && item1.key === item.key,
  )[0].value;
  return [oldValue, newValue];
};

const formatToPlain = (sortedLines) => {
  const lines = [];
  const preparedLines = sortedLines.reduce(
    (acc, item) => {
      const result = [...acc];
      switch (item.status) {
        case 'removed':
          result.push(`Property '${item.key}' was removed`);
          break;
        case 'added':
          result.push(`Property '${item.key}' was added with value: ${item.value}`);
          break;
        default:
          break;
      }
      if (item.file === 'file2' && item.status === 'changed') {
        const values = getValues(item, sortedLines);
        result.push(`Property '${item.key}' was updated. From ${values[0]} to ${values[1]}`);
      }
      return result;
    },
    lines,
  );
  const result = preparedLines.reduce(
    (acc, item) => {
      const temp = `${acc}${item}\n`;
      return temp;
    },
    '',
  );
  return result.slice(0, -1);
};

export default formatToPlain;
