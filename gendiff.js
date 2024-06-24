#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const compareValues = (value, obj) => {
  if (!Object.hasOwn(obj, value[0])) {
    return -1;
  }
  return obj[value[0]] === value[1] ? 0 : 1;
};
/*
-1 - нет ключа
0  - ключ и значение полностью совпадают
1  - значения у ключа разные
*/

const getSign = (compareResult, fileNumber) => {
  if (compareResult === 0) {
    return '  ';
  }
  return fileNumber === 1 ? '- ' : '+ ';
};

const joinLines = (acc, arr) => {
  const result = `${acc}  ${arr[0]}: ${arr[1]}\n`;
  return result;
};

const compare = (filepath1, filepath2) => {
  const path1 = path.resolve(filepath1);
  const path2 = path.resolve(filepath2);
  const fileData1 = fs.readFileSync(path1, { encoding: 'UTF-8', flag: 'r' });
  const fileData2 = fs.readFileSync(path2, { encoding: 'UTF-8', flag: 'r' });
  const obj1 = JSON.parse(fileData1);
  const obj2 = JSON.parse(fileData2);
  // convert objects in array
  const items1 = Object.entries(obj1);
  const items2 = Object.entries(obj2);
  const comparedItem1 = items1.map((item) => [item[0], item[1], compareValues(item, obj2), 1]);
  const comparedItem2 = items2.map((item) => [item[0], item[1], compareValues(item, obj1), 2]);
  const part = comparedItem2.filter((item) => item[2] !== 0);
  const unsortedLines = comparedItem1.concat(part);
  const sortedLines = _.sortBy(unsortedLines, [(item) => [item[0], item[3]]]);
  const lines = sortedLines.map((item) => [getSign(item[2], item[3]) + item[0], item[1]]);
  const result = lines.reduce(joinLines, '{\n');
  return `${result}}`;
};

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(compare(filepath1, filepath2));
  })
  .parse(process.argv);
