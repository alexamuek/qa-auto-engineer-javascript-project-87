const getValues = (item, sortedLines) => {
  const newValue = item.value;
  const oldValue = sortedLines.filter(
    (item1) => item1.file === 'file1'
      && item1.key === item.key,
  )[0].value;
  return [oldValue, newValue];
};

const collectLines = (arr) => {
  const result = arr.reduce(
    (acc, item) => {
      const temp = `${acc}${item}\n`;
      return temp;
    },
    '',
  );
  return result.slice(0, -1);
};

const formatToPlain = (sortedLines) => {
  const lines = [];
  const preparedLines = sortedLines.reduce(
    (acc, item) => {
      switch (item.status) {
        case 'removed':
          return [...acc, `Property '${item.key}' was removed`];
          // result.push(`Property '${item.key}' was removed`);
        case 'added':
          return [...acc, `Property '${item.key}' was added with value: ${item.value}`];
          // result.push(`Property '${item.key}' was added with value: ${item.value}`);
        default:
          break;
      }
      if (item.file === 'file2' && item.status === 'changed') {
        const values = getValues(item, sortedLines);
        return [...acc, `Property '${item.key}' was updated. From ${values[0]} to ${values[1]}`];
        // result.push(`Property '${item.key}' was updated. From ${values[0]} to ${values[1]}`);
      }
      return acc;
    },
    lines,
  );
  const result = collectLines(preparedLines);
  return result;
};

export default formatToPlain;
