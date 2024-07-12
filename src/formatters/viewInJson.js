const formatToJson = (sortedLines) => {
  const obj = { diff: sortedLines };
  const result = JSON.stringify(obj);
  return result;
};

export default formatToJson;
