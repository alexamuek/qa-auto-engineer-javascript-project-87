// import _ from 'lodash';

const formatToJson = (arr) => {
  const obj = arr.reduce((acc, item) => {
    const tmp = {};
    tmp[item.key] = item.value;
    return { ...acc, ...tmp };
  }, {});
  const result = JSON.stringify(obj);
  return result;
};

export default formatToJson;
