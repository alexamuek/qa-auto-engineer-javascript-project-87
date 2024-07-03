const formatToPlain = (arr) => {
  const removedProperties = arr.filter(
    (item) => item[3] === 1
    && item[2] === -1,
  );
  const addedProperties = arr.filter(
    (item) => item[3] === 2
    && item[2] === -1,
  );
  const updatedProperties = arr.filter(
    (item) => item[3] === 2
    && item[2] === 1,
  );
  const lines = [];
  removedProperties.reduce(
    (acc, item) => {
      // acc.push(`Property '${item[0]}' was removed`);
      const result = [...acc, `Property '${item[0]}' was removed`];
      return result;
    },
    lines,
  );
  updatedProperties.reduce(
    (acc, item) => {
      const oldValue = arr.filter(
        (item1) => item1[3] === 1
        && item1[0] === item[0],
      )[0][1];
      const newValue = item[1];
      acc.push(`Property '${item[0]}' was updated. From ${oldValue} to ${newValue}`);
      return acc;
    },
    lines,
  );
  addedProperties.reduce(
    (acc, item) => {
      acc.push(`Property '${item[0]}' was added with value: ${item[1]}`);
      return acc;
    },
    lines,
  );
  const result = lines.reduce(
    (acc, item) => {
      const temp = `${acc}${item}\n`;
      return temp;
    },
    '',
  );
  return result.slice(0, -1);
};
/*
-1 - нет ключа
0  - ключ и значение полностью совпадают
1  - значения у ключа разные
*/

export default formatToPlain;
